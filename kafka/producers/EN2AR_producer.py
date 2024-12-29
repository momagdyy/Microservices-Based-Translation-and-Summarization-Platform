from kafka import KafkaProducer
import json

class EN2ARProducer:
    def __init__(self):
        self.producer = KafkaProducer(
            bootstrap_servers=['localhost:9092'],
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )

    def send_translation_request(self, text):
        message = {
            "text": text,
            "source_language": "en",
            "target_language": "ar"
        }
        self.producer.send('translation-en2ar-requests', value=message)
        self.producer.flush()
        print(f"Sent translation request (EN to AR): {message}")

    def close(self):
        self.producer.close()

