# Express login demo with auth0 and passportjs

<p align="center">
  <img src="screenshot.png" alt="login screenshot">
</p>

This demo app shows a login with github.
For the full list of supported logins, check [auth0](https://auth0.com)

## Configure
1. Create an account at [auth0](https://auth0.com)
1. Register an auth0 application in your [github](https://github.com) acount with these instructions: [Obtaining a ClientId and Client Secret for GitHub](https://docs.auth0.com/github-clientid)
1. Edit `app/config.js` to use your auth0 `domain`, `clientID` and `clientSecret` keys

## Running
1. Run `npm start`
1. Open <http://localhost:3000/>

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
MIT