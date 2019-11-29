//imports
const express = require('express');
const users = require('./data/users');
const drinks = require('./data/recipes');

//Setting Router
const router = express.Router();

//get data
router.get('/user', (req, res) =>{
    res.send(users);
})

router.get('/recipes', (req, res)=> {
    res.send(drinks);
})

module.exports = router;