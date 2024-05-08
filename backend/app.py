from flask import Flask, jsonify, request, send_from_directory, session
from flask_session import Session
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
from influxdb import InfluxDBClient
import requests
from apscheduler.schedulers.background import BackgroundScheduler
import json
from datetime import datetime, timedelta

load_dotenv()
app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'fallback-secret-key')
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'default-mail-server')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME', 'default-username')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD', 'default-password')
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'False').lower() == 'true'
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'True').lower() == 'true'
app.config['SESSION_TYPE'] = 'filesystem'

mail = Mail(app)
Session(app)

influx_client = InfluxDBClient(host='localhost', port=8086, database='terrasense')

data = {
    'temperature': 'Brak danych',
    'humidity': 'Brak danych',
    'light': 'Brak danych',
    'co': 'Brak danych',
    'smoke': 'Brak danych',
    'airQuality': 'Brak danych'
}

reader = SimpleMFRC522()

@app.route('/scan-rfid', methods=['POST'])
def scan_rfid():
    try:
        id, text = reader.read()
        if str(id).strip() == '151293209335':
            session['logged_in'] = True
            session['user'] = 'admin'
            return jsonify({'status': 'success', 'message': 'Zalogowano pomyślnie', 'user': 'admin'})
        else:
            return jsonify({'status': 'error', 'message': 'Nieprawidłowe ID karty'})
    finally:
        GPIO.cleanup()

@app.route('/')
def serve_vue_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/logout', methods=['GET'])
def logout():
    session.pop('logged_in', None)
    session.pop('user', None)
    return jsonify({'status': 'success', 'message': 'Wylogowano pomyślnie'})

@app.route('/session-status', methods=['GET'])
def session_status():
    if 'logged_in' in session:
        return jsonify({'logged_in': True, 'user': session.get('user')})
    return jsonify({'logged_in': False})

@app.route('/get-data', methods=['GET'])
def get_data():
    global data
    return jsonify(data)

@app.route('/data', methods=['POST'])
def receive_data():
    global data
    if sensor_states['temperature']:
        data['temperature'] = request.form.get('temperature', 'Brak danych')
    if sensor_states['humidity']:
        data['humidity'] = request.form.get('humidity', 'Brak danych')
    if sensor_states['light']:
        data['light'] = 1 if request.form.get('light') == '1' else 0
    if sensor_states['co']:
        data['co'] = 1 if request.form.get('co') == '1' else 0
    if sensor_states['smoke']:
        data['smoke'] = 1 if request.form.get('smoke') == '1' else 0
    if sensor_states['airQuality']:
        data['airQuality'] = 1 if request.form.get('airQuality') == '1' else 0

    json_body = [{
        "measurement": "environment",
        "tags": {"sensor": "default"},
        "fields": {
            "temperature": float(data['temperature']),
            "humidity": float(data['humidity']),
            "light": data['light'],
            "co": data['co'],
            "smoke": data['smoke'],
            "airQuality": data['airQuality']
        }
    }]
    influx_client.write_points(json_body)
    return jsonify(success=True)


@app.route('/grafana-data', methods=['GET'])
def get_grafana_data():
    grafana_url = os.getenv('GRAFANA_URL')
    headers = {"Authorization": f"Bearer {os.getenv('GRAFANA_TOKEN')}"}
    try:
        response = requests.get(grafana_url, headers=headers)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify(error=str(e)), 400

alert_settings = {}

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
config_path = os.path.join(BASE_DIR, 'config', 'settings.json')

def ensure_directory_exists():
    os.makedirs(os.path.dirname(config_path), exist_ok=True)

ensure_directory_exists()

def save_settings(settings):
    try:
        ensure_directory_exists()
        with open(config_path, 'w') as f:
            json.dump(settings, f, indent=4)
        print("Settings saved successfully")
        with open(config_path, 'r') as f:
            print("Current settings:", f.read())
    except Exception as e:
        print(f"Failed to save settings due to: {e}")
        raise

def load_settings():
    try:
        with open(config_path, 'r') as f:
            loaded_settings = json.load(f)
            print("Loaded settings:", loaded_settings)
            return loaded_settings
    except FileNotFoundError:
        print("Settings file not found, returning default settings.")
        return {}
    except Exception as e:
        print(f"Error loading settings: {e}")
        return {}

settings = load_settings()
print(settings)

@app.route('/set-alerts', methods=['GET', 'POST', 'DELETE'])
def handle_alerts():
    if request.method == 'GET':
        return jsonify(load_settings())
    elif request.method == 'POST':
        data = request.get_json()
        if not data:
            return jsonify({'status': 'error', 'message': 'No data provided'}), 400
        return jsonify(save_settings(data)), 200
    elif request.method == 'DELETE':
        alert_type = request.args.get('type')
        settings = load_settings()
        if alert_type in settings:
            settings[alert_type] = {'enabled': False, 'min': None, 'max': None}
            save_settings(settings)
            return jsonify({'status': 'success', 'message': f'Alert {alert_type} removed'}), 200
        return jsonify({'status': 'error', 'message': 'Alert type not found'}), 404


def check_alert_conditions():
    with app.app_context():
        global alert_settings
        alert_settings = load_settings()
        email = alert_settings.get('email')

        if alert_settings.get('temperature', {}).get('enabled'):
            current_temp = float(data.get('temperature', 0))
            temp_settings = alert_settings.get('temperature', {})
            min_temp = float(temp_settings.get('min', float('inf')))
            max_temp = float(temp_settings.get('max', float('-inf')))
            check_and_send_alert(current_temp, min_temp, max_temp, email, "Temperature")

        if alert_settings.get('humidity', {}).get('enabled'):
            current_humidity = float(data.get('humidity', 0))
            humidity_settings = alert_settings.get('humidity', {})
            min_humidity = float(humidity_settings.get('min', float('inf')))
            max_humidity = float(humidity_settings.get('max', float('-inf')))
            check_and_send_alert(current_humidity, min_humidity, max_humidity, email, "Humidity")

        for sensor in ['light', 'co', 'smoke', 'airQuality']:
            if alert_settings.get(sensor, {}).get('enabled'):
                current_state = int(data.get(sensor, 0))
                if current_state == 1:
                    send_alert_email(email, f"{sensor.capitalize()} detected. Please check your system.")

def check_and_send_alert(current_value, min_value, max_value, email, sensor_type):
    if email and (current_value < min_value or current_value > max_value):
        alert_message = f"{sensor_type} {current_value} is outside the set range ({min_value} - {max_value})."
        print(alert_message)
        send_alert_email(email, alert_message)
    elif not email:
        print("Email address not set in alert settings, no email sent.")
    else:
        print(f"{sensor_type} is within the set range, no email sent.")

def send_alert_email(email, message):
    with app.app_context():
        try:
            msg = Message("Alert System",
                          recipients=[email],
                          sender='terrasense@devas.pl',
                          body=message)
            mail.send(msg)
            print("Email successfully sent to", email)
        except Exception as e:
            print(f"Failed to send email due to: {str(e)}")


@app.route('/update-email-interval', methods=['POST'])
def update_email_interval():
    data = request.get_json()
    interval = data.get('interval', 5)
    interval = int(interval)

    settings = load_settings()
    settings['email_interval'] = interval
    save_settings(settings)

    scheduler.reschedule_job('email_job_id', trigger='interval', minutes=interval)

    return jsonify({'success': True, 'message': f'Email interval updated to {interval} minutes'})

def start_scheduler():
    global scheduler
    settings = load_settings()
    email_interval = settings.get('email_interval', '5')
    email_interval = int(email_interval)

    scheduler = BackgroundScheduler()
    scheduler.add_job(check_alert_conditions, 'interval', minutes=email_interval, id='email_job_id')
    scheduler.start()

sensor_states = {
    'temperature': True,
    'humidity': True,
    'light': True,
    'co': True,
    'smoke': True,
    'airQuality': True
}

@app.route('/toggle-sensor/<sensor_id>', methods=['POST'])
def toggle_sensor(sensor_id):
    if sensor_id in sensor_states:
        sensor_states[sensor_id] = not sensor_states[sensor_id]
        return jsonify({'success': True, 'message': f'{sensor_id} toggled to {sensor_states[sensor_id]}'})
    else:
        return jsonify({'success': False, 'message': 'Invalid sensor ID'}), 404

@app.route('/api/sensor-status', methods=['GET'])
def sensor_status():
    return jsonify({
        'temperature': True,
        'humidity': True,
        'light': True,
        'co': True,
        'smoke': True,
        'airQuality': True
    })

@app.route('/api/toggle-sensor/<sensor>', methods=['POST'])
def api_toggle_sensor(sensor):
    current_state = sensor_states.get(sensor, None)
    if current_state is None:
        return jsonify({'success': False, 'message': 'Invalid sensor ID'}), 404
    sensor_states[sensor] = not current_state
    return jsonify({'success': True, 'message': f'{sensor} toggled to {sensor_states[sensor]}'})

@app.route('/api/sensor-data')
def get_sensor_data():
    start = request.args.get('start')
    end = request.args.get('end')

    start_time = datetime.strptime(start, '%Y-%m-%dT%H:%M')
    end_time = datetime.strptime(end, '%Y-%m-%dTa%H:%M')
    start_time_str = start_time.strftime('%Y-%m-%dT%H:%M:%SZ')
    end_time_str = end_time.strftime('%Y-%m-%dT%H:%M:%SZ')

    query = f"SELECT * FROM environment WHERE time >= '{start_time_str}' AND time <= '{end_time_str}'"
    try:
        results = influx_client.query(query)
        points = list(results.get_points(measurement='environment'))
        data = [{
            'time': point['time'],
            'temperature': point['temperature'],
            'humidity': point['humidity'],
            'light': point['light'],
            'co': point['co'],
            'smoke': point['smoke'],
            'airQuality': point['airQuality']
        } for point in points]
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

start_scheduler()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)