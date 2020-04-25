# mern
Inspired by Dave Ceddia's [project](https://daveceddia.com/deploy-react-express-app-heroku/)

This is a lightweight template of a "full-stack" node app that follows a simple monalithic architecture. It's called mern because the tech stack is based on:

- [**M**ongodb](https://www.mongodb.com/) for database stuff
- [**E**xpress](http://expressjs.com/) for the back end
- [**R**eact](https://reactjs.org/) for the front end 
- [**N**ode](https://nodejs.org/en/) to make things work

This is also a [TypeScript](https://www.typescriptlang.org/v2/) template because typing things is cool.

## What this template does
It just renders a list of all User models stored in a table in mongodb. There's also a form to create a new User.

## How things work
The app tries to route incoming requests to a router used by the _Express_ server, but has a "catch all" router that will route any "uncaught" requests to the _React_ app.

A good practice might be to define all routes used by the Express server to begin with `/api`. So any requests of the form `{root}/api` will be handled by the server.

If a request is not handled by the Express server, the `index.html` of the React app's production build is served up instead.

## Getting started
There are a couple scripts defined in the `package.json` that might be useful to take a look at.

Since the server needs a production build of the React app to be available, you should probably run 
```
yarn run build
```
after cloning this repo. This gets production builds ready for both the client and the server.

The server also tries to connect to a mongodb server. If you're running in a `development` environment, it tries to connect over the default port. (`mongodb://localhost:27017` see [mongoose.ts](src/db/mongoose.ts))

### Server

To run the server in `development` mode, run
```
yarn run dev:server
```
This will use a dev dependency `ts-node-dev` to run the server from it's TS source code files.

But by default, Express is made to run JavaScript. (You'd want to run Express using JS source code in production). Since we're using TypeScript we need to transpile the TS to JS.

To get this done, run 
```
yarn run build:server
```

This runs `tsc` using the options specified in the `tsconfig.json` and outputs the JS source code to the `build` directory.

### Client 
If you're working on the client, you probably wan't the server to be running as well. 

Running
```
yarn run dev
```
starts both the client and the server in `development` mode.

## Production
To run the production builds of both the client and the server, they both have to be available (`yarn run build`). Then you can run 
```
yarn start
```
