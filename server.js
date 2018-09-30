// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = 8080|| process.env.PORT ;

// Sets up our server to parse our request body for usage


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://todo:12345a@ds119523.mlab.com:19523/heroku_5jwsfkz3', 
{ useNewUrlParser: true });
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// start your server
app.listen(PORT, function () {
  console.log(`server is listening on localhost: ${PORT}`)
})


