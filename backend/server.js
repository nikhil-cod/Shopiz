const app = require('./app');

const dotenv= require("dotenv");
const connectDatabase = require("./config/database")

//Conifg 
dotenv.config({path: "backend/config/config.env"});

//Calling database function
connectDatabase();
app.listen(process.env.PORT);