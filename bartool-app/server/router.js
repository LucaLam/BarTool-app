//imports
const express = require('express');
const users = require('./data/users');

//Setting Router
const router = express.Router();

//get data
router.get('/user', (req, res) =>{
    res.send(users);
})

module.exports = router;