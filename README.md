# My NPM Express App

This is a simple Express.js application that allows users to input their name and displays a list of user names.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage

1. Run `npm start` to start the application.
2. Open your browser and go to `http://localhost:3000` to access the form.
3. Enter your name in the input field and submit the form.
4. Go to `http://localhost:3000/users` to see the list of user names.

## Project Structure

```
my-npm-express-app
├── src
│   ├── views
│   │   ├── index.ejs
│   │   └── users.ejs
│   ├── routes
│   │   ├── index.js
│   │   └── users.js
│   └── app.js
├── package.json
├── README.md
└── .gitignore
```

- `src/views/index.ejs`: Holds a form that allows users to input their name.
- `src/views/users.ejs`: Outputs a `<ul>` with the user names or some error text.
- `src/routes/index.js`: Sets up the route for the root path ("/"). Renders the `index.ejs` template.
- `src/routes/users.js`: Sets up the route for the "/users" path. Renders the `users.ejs` template.
- `src/app.js`: Entry point of the application. Creates an instance of the Express app, sets up middleware, and registers the routes.
- `package.json`: Configuration file for npm. Lists the dependencies and scripts for the project.
- `README.md`: Documentation for the project.
- `.gitignore`: Specifies which files and directories should be ignored by Git.

## Dependencies

- Express.js: "^4.17.1"
- EJS: "^3.1.6"

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.