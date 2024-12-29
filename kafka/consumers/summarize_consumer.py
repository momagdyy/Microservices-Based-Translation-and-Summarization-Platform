from confluent_kafka import Consumer, KafkaException, KafkaError

conf = {
    'bootstrap.servers': 'localhost:9092',  
    'group.id': 'summarization-consumer-group',
    'auto.offset.reset': 'earliest'  
}

consumer = Consumer(conf)

consumer.subscribe(['summarization-responses'])  

def consume_message():
    try:
        msg = consumer.poll(timeout=10.0)  
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

consumer.close()
