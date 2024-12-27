CREATE TABLE IF NOT EXISTS logs (
    request_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    input_text TEXT,
    output_text TEXT,
    timestamps TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
