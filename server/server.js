const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger('dev'));

app.get('/', async(req,res) =>  {
    try {
        res.send({msg:'hello'})    
    } catch (error) {
        throw error
    }
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});