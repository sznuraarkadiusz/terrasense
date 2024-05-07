import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()

try:
    print("Przyłóż kartę do czytnika...")
    while True:
        id, text = reader.read()
        print("ID karty: ", id)
        print("Tekst na karcie: ", text)
finally:
    GPIO.cleanup()
