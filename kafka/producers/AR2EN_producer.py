from kafka import KafkaProducer
import json

class AR2ENProducer:
    def __init__(self):
        self.producer = KafkaProducer(
            bootstrap_servers=['localhost:9092'],
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )

    def send_translation_request(self, text):
        message = {
            "text": text,
            "source_language": "ar",
            "target_language": "en"
        }
        self.producer.send('translation-ar2en-requests', value=message)
        self.producer.flush()
        print(f"Sent translation request (AR to EN): {message}")

    def close(self):
        self.producer.close()
