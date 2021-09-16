const express = require("express");
const app = express();
const port = 3000
const drinks = require("./models/drinks")

app.get('/', (req,res) => {
    res.send("welcome to the GitPub app!")
})
app.get('/drinks/', (req,res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks})
})

// app.get('/drinks/x', (req,res) => {
//     res.render('drinks_show.ejs', {drink: drinks[req.params.indexOfDrinksArray]})
// })

app.get('/drinks/:id', (req,res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]})
});

app.listen(port,() => {
    console.log('listening on port' , port);
});