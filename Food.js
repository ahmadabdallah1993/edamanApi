'use strict';

const axios = require('axios');



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
    // res.state(200).send(arr);
    res.send(arr);


}).catch(error =>{
    // res.state(404).send(error)
    console.log(error)
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

module.exports = recepiHan;

