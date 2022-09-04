'use strict';


const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
server.use(cors());
const Recipe = require('./Food')



const PORT=process.env.PORT || 3005;


// http://localhost:3005/searchRecipe?name=water
server.get('/searchRecipe', Recipe);


server.get('*', defaultHandeler);

function defaultHandeler(req,res){
    res.status(404).send("sorry page not found");
}


server.listen(PORT,()=>{
    console.log(`hello i am listening to this port ${PORT}`);
})

















// https://api.edamam.com/search?q=water&app_id=14d9e7ee&app_key=14a8f462cc2c651cd7b8e8d3439f8714