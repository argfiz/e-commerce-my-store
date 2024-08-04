const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
//const TwiterStrategy = require('./strategies/twi.strategy');


passport.use(LocalStrategy);
passport.use(JwtStrategy);
