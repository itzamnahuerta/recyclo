const express = require('express');
const authRouter = express.Router();
const { passport, jwtSign  } = require('../auth/Auth');



module.exports = authRouter;