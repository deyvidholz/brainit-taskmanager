<h1 align="center"> 
	💻 BrainIT Task Manager 💻
</h1>

- [🏃 Quick Start](#-quick-start)
- [📝 Description](#-description)
- [➕ Dependencies](#-dependencies)
- [📁 Setting up database](#-setting-up-database)
- [🔨 Building the project](#-building-the-project)
- [🚀 Running the app](#-running-the-app)
  - [🔸 Important!](#-important)
- [✅ Swagger API Consumer](#-swagger-api-consumer)
- [✅ Testing (soon)](#-testing-soon)
- [How this project managers authentication](#how-this-project-managers-authentication)
- [3 libraries that I consider an API should use](#3-libraries-that-i-consider-an-api-should-use)
  - [Express:](#express)
  - [Passport with JWT:](#passport-with-jwt)
  - [TypeORM](#typeorm)

## 🏃 Quick Start

- Create `.env` file based on `.env.example` in the project folder
- For security reasons, change values of `JWT_SECRET` and and `POSTGRES*` in `.env` file
- If you will use Docker, also change `PGADMIN_DEFAULT_PASSWORD` and `PGADMIN_DEFAULT_EMAIL` in `docker-compose.yml` file
- Install dependencies using `yarn` or `npm install`
- Start the project for development using `yarn start:dev` or `npm run start:dev`

## 📝 Description

This project is a boilerplate for Nodejs/Typescript server-side applications. It already includes:

- 🟢 docker-compose file including postgres and pgadmin container setup
- 🟢 Database connection with TypeORM configured (`seeds` included)
- 🟢 JWT Authentication with Passport
- 🟢 Routes configured
- 🟢 Password encryptation
- 🟢 Unit tests configured
- 🟢 Enviroments configured (for development, production, stage and qa)
- 🟢 Validation schemas (using Joi)
- 🟢 Swagger

## ➕ Dependencies

These tecnologies listed below are required to run the project properly:

- Node >= v18.16
- NPM => v8.1.2
- (optional) Docker >= 20.10.12 - If you do not have docker installed, you need to setup your database environment variables

To install the dependencies, use `yarn` or `npm install`.

## 📁 Setting up database

- Start docker containers using `docker-compose up`
- (optional) To create tables, run `yarn schema:sync` or `npm run schema:sync`
- (optional) To create seeds, run `yarn seed:run` or `npm run seed:run`

## 🔨 Building the project

- Use `yarn build` or `npm run build`
- Create a `.env.production` file and change the `TYPEORM_DIR*` variables (specified in `.env.example`)
- Use `yarn start` or `npm run start`

## 🚀 Running the app

- Start docker containers using `docker-compose up`
- Install dependencies using `yarn` or `npm install`
- Production: `yarn start` or `npm start`
- Development: `yarn start:dev` or `npm run start:dev`

### 🔸 Important!

Each `start:*` script will run node/nodemon with an specific `*.env` file. Here are the `.env` files for each one:

- `yarn start:dev` default env file is `.env`
- `yarn start` default env file is `production.env`

**Note** that except `start:dev`, all the other scripts will run
the builded project. It means that it will not use Typescript, but Javascript, so make sure to change the `TYPEORM_DIR*` in the `.env*` files as specified in `.env.example`

## ✅ Swagger API Consumer

- After starting the application, go to `{app_url}/api-docs`, a Swagger API Consumer should be displayed. Please, remember that most of the endpoints require AUTHORIZATION. Use the Swagger Consumer to get a `Bearer Token`. If you don't have a user, create one.

## ✅ Testing (soon)

- Use `yarn test` or `npm test`

---

## How this project managers authentication

It uses Passport and JWT to generate Bearer Tokens and authenticate the user. There's a middleware that checks if the token is a valid one. Before getting the token, the endpoint will also check if the username and password provided is valid.

## 3 libraries that I consider an API should use

1. Express
2. Passport with JWT
3. TypeORM

### Express:

Express is modern, easy-to-use and has multiple options to set up routes quickly, such as parameters, json requests and default route responses such as 404. To keep a fast-paced development, I'd go with Express or FastAPI.

### Passport with JWT:

Those are essential to set up a quick and secure authentication system in a project. Commonly used by Web APIs written in Node, these two libraries are very popular and has great articles, tutorials and documentation about how to use and customize an authentication system.

### TypeORM

To me, it has a better readability than Sequelize. Simple to use, fast, organized, modern, that's why I'd go with it for an API. You can create Entities, Repositories, Subscriptions, Listeners and much more with TypeORM. One more thing? It is supposed to be used with TypeScript, so you won't have problems with typings :)
