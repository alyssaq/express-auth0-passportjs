var Auth0Strategy = require('passport-auth0');
var config = require('./config');

var strategy = new Auth0Strategy(config.auth0,
  function(accessToken, refreshToken, profile, done) {
    console.log('profile is', profile);
    return done(null, profile);
  });

function setup(passport) {
  passport.use(strategy);

  // This is not a best practice, but we want to keep things simple for now
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
}

exports.setup = setup;