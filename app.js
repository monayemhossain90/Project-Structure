const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const mongoose = require("mongoose")

const bodyParser = require("body-parser");

//Security Middleware Import
const rateLimit = require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')


//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// body parser
app.use(bodyParser.json())

//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// database connection
const URI ="mongodb+srv://<username>:<password>@cluster0.j7kvy.mongodb.net/CRUD?retryWrites=true&w=majority";
const OPTIONS = {user:"monayem-crud",pass:"nBG50ic8D6L4oV0A", autoIndex:true};
mongoose.connect(URI,OPTIONS,(err)=>{
    console.log("database connection success");
  
})

// manage Frontend routing 
app.use(express.static('client/build'));
app.get("*",(req,res)=>{
    req.sendFile(path.resolve(__dirname,"client","build","index.html"))
})


// manage Backend API Routing
app.use("/api/v1",router);

//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})

module.exports=app;
