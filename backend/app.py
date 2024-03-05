from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')

data = {
    'temperature': 'Brak danych',
    'humidity': 'Brak danych',
    'light': 'Brak danych',
    'co': 'Brak danych',
    'smoke': 'Brak danych',
    'airQuality': 'Brak danych'
}

@app.route('/')
def serve_vue_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/get-data', methods=['GET'])
def get_data():
    return jsonify(data)

@app.route('/data', methods=['POST'])
def receive_data():
    global data
    print(request.form);
    data['temperature'] = request.form.get('temperature', 'Brak danych')
    data['humidity'] = request.form.get('humidity', 'Brak danych')
    data['light'] = 'Światło wykryte' if request.form.get('light') == '1' else 'Brak światła'
    data['co'] = 'Tlenek węgla wykryty!' if request.form.get('co') == '1' else 'Brak tlenku węgla'
    smoke_value = request.form.get('smoke', '0')
    if smoke_value == '1':
        data['smoke'] = 'Dym wykryty!'
    else:
        data['smoke'] = 'Brak dymu'
    data['airQuality'] = request.form.get('airQuality', 'Brak danych')
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)