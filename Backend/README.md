# Task Management App - Backend

Welcome to the backend repository of the Task Management App! This repository contains the Node.js and Express server that serves as the backend for our task management web application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

1. Clone this repository to your local machine:

   https://github.com/Anandhu09/Miraki.git


2. Navigate to the project folder:

   cd Backend


3. Install the dependencies:

   npm install


### Configuration

1. Make sure you have a running instance of MongoDB. If not, you can install it and start it locally, or use a cloud-based MongoDB service.
2. Create a `.env` file in the root directory of the project and add your configuration values:

   PORT=3000

   MONGODB_URI=mongodb://localhost/taskmanager

   JWT_SECRET=your-secret-key


Replace `your-secret-key` with your preferred secret key for JWT token encryption.

## Endpoints

The backend provides the following endpoints:
- `POST /api/auth/register`: Register a new user. Requires a JSON body with a `username` and `password`.
- `POST /api/auth/login`: Log in a user. Requires a JSON body with a `username` and `password`.
- `POST /api/tasks`: Create a new task. Requires authentication and a JSON body with `title` and `description`.
- `GET /api/tasks`: Get all tasks. Requires authentication.
- `GET /api/tasks/:id`: Get a task by its ID. Requires authentication.
- `PUT /api/tasks/:id`: Update a task by its ID. Requires authentication and a JSON body with fields to update.
- `DELETE /api/tasks/:id`: Delete a task by its ID. Requires authentication.

## Authentication

The backend uses JWT (JSON Web Tokens) for authentication. After registering or logging in, the server generates a token that needs to be included in the `Authorization` header of subsequent requests.

## Database

The backend uses MongoDB as the database. Make sure you have a running MongoDB instance, and the connection URI is properly configured in the `.env` file.

## EOF


