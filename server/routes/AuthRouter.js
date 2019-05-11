const express = require('express');
const AuthRouter = express.Router();
const { passport, jwtSign  } = require('../auth/Auth');



module.exports = AuthRouter;