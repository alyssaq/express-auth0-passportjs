module.exports = {
  port: process.env.PORT || 3000,

  auth0: {
    domain: 'alyssa.auth0.com',
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:  '/callback'
  }
};