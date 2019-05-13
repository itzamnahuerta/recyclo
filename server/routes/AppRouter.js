const express = require('express');
const AppRouter = express.Router();

AppRouter.get('/protected', async(req,res) => {
    res.json({msg: 'Authenticated', user:req.user});
});

module.exports = AppRouter;