from kafka import KafkaConsumer
import json

class AR2ENConsumer:
    def __init__(self):
        self.consumer = KafkaConsumer(
            'translation-ar2en-responses',
            bootstrap_servers=['localhost:9092'],
            group_id='ar2en-group',
            value_deserializer=lambda m: json.loads(m.decode('utf-8'))
        )

    def listen_for_translation_responses(self):
        for message in self.consumer:
            print(f"Received translation response (AR to EN): {message.value}")
            # Process the response, e.g., send it back to the user

    def close(self):
        self.consumer.close()
