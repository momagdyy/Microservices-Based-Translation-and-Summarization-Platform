from confluent_kafka import Producer

# Kafka configuration
conf = {
    'bootstrap.servers': 'localhost:9092',  # Change this to your Kafka broker
    'client.id': 'python-producer'
}

# Initialize the producer
producer = Producer(conf)

# Callback for message delivery status
def delivery_report(err, msg):
    if err is not None:
        print(f"Message delivery failed: {err}")
    else:
        print(f"Message delivered to {msg.topic()} [{msg.partition()}]")

# Function to send a message to Kafka
# Inside your producer code
def send_message(topic, message):
    print(f"Sending message: {message} to topic: {topic}")  # Log the message being sent
    producer.produce(topic, message.encode('utf-8'), callback=delivery_report)
    producer.flush()

# Example usage
topic = 'summarization-requests'  # The Kafka topic you want to produce to
message = '{"text": "hello world.", "style": "formal"}'  # The message you want to send
send_message(topic, message)
