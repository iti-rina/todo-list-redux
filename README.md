# Simple ToDo managing app with filters

You can create a project (category of tasks), add, delete, mark tasks as completed and change its priorities. Also a user have an opportunity to filter tasks by priority (_high, medium, low_) and status (_all, active, completed_).\
All the data stores in local storage.

![todo-list-interface](./docs/img/todo-app.png?raw=true)

## Stack

- React
- Redux Toolkit

## This project can be built with Docker.

1. Install Docker on your device.
2. Build image:
   `docker build -t todo-list-redux:1.0 .`
3. Run containerized app:
   `docker run -d -p 3000:3000 todo-list-redux:1.0`

You can now view the app in the browser on `http://localhost:3000`

## To run without Docker:

1. Install node (node version of the project: 16.17.1)
2. Install dependencies:
   `npm install`
3. To run the project in the development mode:
   `npm start`

The project will be available at `http://localhost:3000`.
