const express = require("express");
const app = express();
const port = 3000
const drinks = require("./models/drinks")
const food = require("./models/food")

app.get('/', (req,res) => {
    res.send("welcome to the GitPub app!")
})
app.get('/drinks/', (req,res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks},)
})


app.get('/drinks/:id', (req,res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]})
});

/////////////////////////
//food
///////////////////////////////

app.get('/food/', (req,res) => {
    res.render('food_index.ejs', {allFoods: food})
})


app.get('/food/:id', (req,res) => {
    res.render('food_show.ejs', {foods: food[req.params.id]})
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
