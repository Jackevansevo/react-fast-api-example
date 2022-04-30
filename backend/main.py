from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

origins = ["http://localhost:1234"]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/users")
def users():
    resp = requests.get("https://reqres.in/api/users")
    # TODO Discuss how to handle errors
    return resp.json().get("data")


@app.get("/users/{user_id}")
def get_user(user_id: int):
    resp = requests.get(f"https://reqres.in/api/users/{user_id}")
    # TODO Discuss how to handle errors
    return resp.json().get("data")
