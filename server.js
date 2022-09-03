'use strict';


const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());

const axios = require('axios');

const PORT=3005;


// http://localhost:3005/searchRecipe?name=water
server.get('/searchRecipe', recepiHan);

function recepiHan(req,res){
    let nr = req.query.name;
    const URL = `https://api.edamam.com/search?q=${nr}&app_id=14d9e7ee&app_key=14a8f462cc2c651cd7b8e8d3439f8714`;

    axios.get(URL).then(result =>{
        // console.log(result.data.hits[0].recipe.uri)
        // console.log(result.data.hits[0].recipe.uri)

        let arr = result.data.hits.map( item =>{
            return new Rec(item);
            
        }) 

        // console.log(arr)
        res.send(arr);


    }).catch(error =>{
        console.log(error);
    })
}

class Rec{
    constructor(item){
        this.image = item.recipe.image;
        this.label = item.recipe.label;
        this.ingredients = item.recipe.ingredientLines;
        // this.ingredients2 = item.recipe.ingredients[1];
    }
}



server.listen(PORT,()=>{
    console.log(`hello i am listening to this port ${PORT}`);
})

















// https://api.edamam.com/search?q=water&app_id=14d9e7ee&app_key=14a8f462cc2c651cd7b8e8d3439f8714