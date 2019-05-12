const express = require('express');
const AuthRouter = express.Router();
const { passport, jwtSign  } = require('../auth/Auth');

AuthRouter.post('/login', async (req,res,next) => {
    passport.authenticate('login', async (err,user,info) => {
        try {
            console.log(`error from auth router ${err}`);
            if(err || !user){
                const error = new Error('Error occured');
                return next(error)
            }

            req.login(user, {
                session: false,
            }, async (error) => {
                if(error){
                    return next(error)
                }
                const {username, id} = user
                const payload = {username, id}
                const token = jwtSign(payload)
                // return user
                return res.json({user, token});
            });
        } catch (error) {
            return next(error);
        }
    })(req,res,next)
});

AuthRouter.post('/signup', async (req,res,next) => {
    passport.authenticate('signup', async (err, user,info) => {
        try {
            if(!user || err){
                let err = new Error('*** cannot create account***');
                err.status = 400
                return next(err);
            }
            console.log('looking for user', user);
            return res.json({msg: 'User Created', user:user}) 
        } catch (error) {
            return next(error);
        }
    })(req,res,next)
})

module.exports = AuthRouter;