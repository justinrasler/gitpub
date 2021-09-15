const express = require("express");
const app = express();
const port = 3000
const drinks = require("./models/drinks")

app.get('/', (req,res) => {
    res.send("welcome to the GitPub app!")
})
app.get('/drinks', (req,res) => {
    res.send(drinks)
})

app.listen(port,() => {
    console.log('listening on port' , port);
});