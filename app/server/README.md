## Description

My test project is a sheet of notes using Nest frameworks, database Postgresql and Docker.
## Create .env file

```bash
# unit tests
$ touch .development.env
```

## Added NODE_ENV variables

```
PORT = "your application port (for example 4000)"
POSTGRES_HOST = postgres
POSTGRES_PORT = 5432
POSTGRES_USER = "your db_user"
POSTGRES_DB = "your database_name"
POSTGRES_PASSWORD = "your database_password"

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app with Docker 

```bash

$ docker-compose build

$ docker-compose up

```

## Stay in touch

- Author - [George Box](https://vk.com/d_memagog)
- Github - [Memagog](https://github.com/Memagog)
- Mail - [jakorobko@yandex.by](jakorobko@yandex.by)

