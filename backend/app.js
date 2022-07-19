const express = require('express');
const app = express();

const errorMiddleWare = require('./middleware/error');

app.use(express.json());
//Route Imports
const product = require("./routes/productRoute");

app.use(product);
app.use(errorMiddleWare);



//Middleware for Errors
module.exports = app;