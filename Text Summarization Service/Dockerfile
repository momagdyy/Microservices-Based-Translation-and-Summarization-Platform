# Use the official PyTorch Docker image with CUDA (if you need GPU support)
FROM nvcr.io/nvidia/pytorch:21.10-py3

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies (optional, depending on your app requirements)
RUN apt-get update && apt-get install -y \
    python3-dev \
    build-essential \
    && apt-get clean

# Install Python dependencies (you can use a requirements.txt for better management)
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose port 8000 for the Django app
EXPOSE 8000

# Start the Django development server (you can change this if using a production server like Gunicorn)
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
