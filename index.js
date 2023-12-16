const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());

const chefs = require('./data/chefs.json');

const recipes = require('./data/recipes.json');


app.get('/', (req, res) => {
    res.send('Recipe Bazar running')
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const seletedChef = chefs.find(chef => chef.id === id);
    console.log(seletedChef);
    res.send(seletedChef)
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefByRecipes = recipes.filter(rps => parseInt(rps.chef_id) === id)
    res.send(chefByRecipes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})