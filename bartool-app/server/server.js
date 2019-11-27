//imports
const express = require('express');
const router = require('./router');
const cors = require('cors');

//use express
const app = express();

//middleware
app.use(cors());
app.use('/', router);

app.listen(8080, ()=>{
    console.log('**SERVER READY**');
})