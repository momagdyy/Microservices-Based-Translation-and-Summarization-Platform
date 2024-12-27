FROM nvcr.io/nvidia/pytorch:21.10-py3

WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3-dev \
    build-essential \
    && apt-get clean

COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt


COPY . /app/

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
