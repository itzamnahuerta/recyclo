const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.get('/', async(req,res) =>  {
    try {
        res.send({msg:'hello'})    
    } catch (error) {
        throw error
    }
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});