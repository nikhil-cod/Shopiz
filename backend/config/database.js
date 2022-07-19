const mongoose = require("mongoose");



const connectDatabase =()=>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce").then((data)=>{
        console.log(`Mongo db connected with server ${data.connection.host} `)
        })
}

module.exports= connectDatabase;