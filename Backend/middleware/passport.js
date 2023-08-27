// middleware/passport.js

const passportJWT = require('passport-jwt');
require("dotenv").config()
const SECRET_KEY = process.env.SECRET_KEY
const User = require('../models/user');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
console.log(SECRET_KEY,"asa")
module.exports = function(passport) {
    passport.use('jwt', new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY
    }, async (jwtPayload, done) => {
      try {
        const user = await User.findOne({ username: jwtPayload.username });
  
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    }));
  };
