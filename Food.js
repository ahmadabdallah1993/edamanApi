'use strict';

const axios = require('axios');
require('dotenv').config();



function recepiHan(req,res){

    let nr = req.query.name;

let myMemory = {};

if(myMemory[nr] !== undefined)
{
    res.send(myMemory[nr]);
}
else
{
    const URL = `https://api.edamam.com/search?q=${nr}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;



axios.get(URL).then(result =>{
    // console.log(result.data.hits[0].recipe.uri)
    // console.log(result.data.hits[0].recipe.uri)

    let arr = result.data.hits.map( item =>{
        return new Rec(item);
    }) 

    // console.log(arr)
    // res.state(200).send(arr);
    myMemory[nr] = arr;
    res.send(arr);


}).catch(error =>{
    // res.state(404).send(error)
    console.log(error)
})
}






    
}

class Rec{
constructor(item){
    this.image = item.recipe.image;
    this.label = item.recipe.label;
    this.ingredients = item.recipe.ingredientLines;
    // this.ingredients2 = item.recipe.ingredients[1];
}
}

module.exports = recepiHan;

