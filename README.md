# Getting started

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node. The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware that validates JsonWebTokens and sets req.user that lets authenticate HTTP requests using JWT tokens in Node.js applications.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Use for generating JWTs used by Authentication.
- [mongoose](https://github.com/Automattic/mongoose) - MongoDB object modeling designed to work in an asynchronous environment. Use for modeling and mapping MongoDB to javascript.
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - It is a plugin which adds pre-save validation for unique fields within a Mongoose schema. It uses for handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The [mongoose-unique-validator] plugin helps us by formatting the error like a normal mongoose [ValidationError].
- [passport](https://github.com/jaredhanson/passport) - It's Express-compatible authentication middleware for Node.js. It uses for handling user authentication.
- [node-sass-middleware](https://github.com/sass/node-sass-middleware) - Connect middleware extracted from node-sass. Recompile .scss or .sass files automatically for connect and express based http servers.
- [slug](https://github.com/dodo/node-slug) - Encoding titles into a URL-friendly format (url-safe). Slugifies every string, even when it contains unicode.
- [pug](https://github.com/pugjs/pug) - Rename from "Jade". It's view engine.
- [babel](https://github.com/babel/babel) - The compiler for writing next generation JavaScript. It made nodejs can understand ES5/ES6.

## Application Structure

- [build/] - This folder contains all compiled JSs code by babeljs (nodejs can understand and run). And It uses for production.
- [tests/] - This folder contains test cases for api. It can tested by Postman - manual tool or auto Postman CLI (newman).
- [src/] - This folder contains all sources of project (es5/es6)
- [src/app.js] - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- [src/config/] - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- [src/routes/] - This folder contains the route definitions for our APIs.
- [src/views/] - This folder contains the views of application.
- [src/public/] - This folder contains all resources that uses for our views/display.
- [src/models/] - This folder contains the schema definitions for our Mongoose models.

## Error Handling

## Authentication
