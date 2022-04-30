# Overview

## Demo

![Image](Demo.gif)


## Overview

- Backend
  - fast-api
- Frontend
  - React/Typescript/React Router
  - Bundled using parcel (low barrier to entry)

Frontend/backend have independent docker files which can be orchestrated with docker-compose

## Running

    pip install docker-compose

    docker-compose up -d

Head to localhost:1234 to view the frontend

## Extensions

If I had some more time:

- Split production/development docker files
- Write tests for frontend / backend
- Pin python dependencies, explore tools like poetry/pipenv/pip-tools
- Proper error handling on the backend


## Backend API Usage

    pipx install httpie

Usage:

    http -b localhost:8000/users/1


```json
[
    {
        "avatar": "https://reqres.in/img/faces/2-image.jpg",
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "id": 2,
        "last_name": "Weaver"
    },
    {
        "avatar": "https://reqres.in/img/faces/3-image.jpg",
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "id": 3,
        "last_name": "Wong"
    },
    {
        "avatar": "https://reqres.in/img/faces/4-image.jpg",
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "id": 4,
        "last_name": "Holt"
    },
    {
        "avatar": "https://reqres.in/img/faces/5-image.jpg",
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "id": 5,
        "last_name": "Morris"
    },
    {
        "avatar": "https://reqres.in/img/faces/6-image.jpg",
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "id": 6,
        "last_name": "Ramos"
    }
]
```

    http -b localhost:8000/users/1

```json
{
    "avatar": "https://reqres.in/img/faces/1-image.jpg",
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "id": 1,
    "last_name": "Bluth"
}
```
