from confluent_kafka import Consumer, KafkaException, KafkaError

# Kafka configuration
conf = {
    'bootstrap.servers': 'localhost:9092',  # Kafka broker address
    'group.id': 'summarization-consumer-group',
    'auto.offset.reset': 'earliest'  # Start reading from the earliest message
}

# Initialize the consumer
consumer = Consumer(conf)

# Subscribe to the Kafka topic
consumer.subscribe(['summarization-responses'])  # The topic you want to consume from

# Polling for messages
def consume_message():
    try:
        msg = consumer.poll(timeout=10.0)  # 10 seconds timeout
        if msg is None:
            print("No message received in the given time.")
        elif msg.error():
            if msg.error().code() == KafkaError._PARTITION_EOF:
                print(f"End of partition reached: {msg.topic()} [{msg.partition()}] at offset {msg.offset()}")
            else:
                raise KafkaException(msg.error())
        else:
            print(f"Received message: {msg.value().decode('utf-8')} from {msg.topic()} [{msg.partition()}]")
    except KafkaException as e:
        print(f"Error while consuming: {e}")

# Example usage
consume_message()

# Close the consumer connection
consumer.close()
