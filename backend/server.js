const app = require('./app');

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

//Handling Uncaught Exception
process.on("uncaughtException", err => { //Error whien the db url is wrong , etc
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception error`);
    process.exit(1);
});


//Conifg 
dotenv.config({ path: "backend/config/config.env" });

//Calling database function
connectDatabase();
const server = app.listen(process.env.PORT);


//Unhandled Promice Rejection
process.on("unhandledRejection", err => { //Error whien the db url is wrong , etc
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promice rejection`);

    server.close(() => {
        process.exit(1);
    });
});

