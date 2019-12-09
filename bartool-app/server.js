//imports
const express = require('express');
const router = require('./router');
const cors = require('cors');
const port = process.env.PORT || 8080

//use express
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//middleware
const corsConfig = {
    origin: ["http://localhost:3000", 'https://bartool.netlify.com'] // add domains here
};

// 'https://bartool.netlify.com'

app.use(cors(corsConfig))

app.use('/', router);

app.listen(port, ()=>{
    console.log('Server Ready on port', port);
});