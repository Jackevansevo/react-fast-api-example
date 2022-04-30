FROM python:alpine 

WORKDIR /app

RUN apk update && apk upgrade && apk add build-base python3

COPY requirements.txt .

RUN pip install -U pip setuptools && pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

