module.exports = {
  port: process.env.PORT || 3000,

  auth0: {
    audience: process.env.AUTH0_CLIENT_ID,
    secret: process.env.AUTH0_CLIENT_SECRET
  }
};