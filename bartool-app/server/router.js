
const express = require('express');
const users = require('./data/users');
const drinks = require('./data/recipes');

const router = express.Router();

router.get('/user', (req, res) =>{
    res.send(users);
})

router.get('/recipes', (req, res)=> {
    res.send(drinks);
})

router.post('/user/:name/savedDrink', (req, res) => {
    let name = req.params.name
    let foundUser = users.find(item => name === item.name)

    let newSavedDrink = {
        name: req.body.drink,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
        garnish: req.body.garnish,
    }

    foundUser.savedDrinks.push(newSavedDrink);
    res.send(newSavedDrink);
})

module.exports = router;