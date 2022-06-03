const express = require('express');
const config = require('./config');
var cors = require('cors');

const app = express();

//Importing routes
const productsRoute = require('./routes/products.routes');
const registerRoute = require('./routes/register.routes');
const loginRoute = require('./routes/login.routes');

//App listening
app.set('port', config.port);

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(productsRoute);
app.use(registerRoute);
app.use(loginRoute);

module.exports = app;