const express = require('express');
const app = express();
const cors = require("cors");


const errorMiddleWare = require('./middleware/error');

app.use(cors());
app.use(express.json());
//Route Imports
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");


app.use(productRoute);
app.use(userRoute);
app.use(errorMiddleWare);



//Middleware for Errors
module.exports = app;