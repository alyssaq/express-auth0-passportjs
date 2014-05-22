var express = require('express');
var jwt = require('express-jwt');
var cors = require('cors');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan  = require('morgan');
var compress = require('compression');
var config = require('./config');
var authenticate = require('./authenticate');

var app = express();
app.engine('html', require('ejs').renderFile); //Register ejs as html
app.set('views', __dirname + '/views');
app.set('view engine', 'html'); // Use .html extension

app.use('/styles', express.static(__dirname + '/styles'));

authenticate.setup(passport);
app.use(morgan());
app.use(cookieParser());
app.use(bodyParser());
app.use(compress());
app.use(session({ secret: 'shhhhhhhhh' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

var corsOptions = {
  origin: '*',
  methods: ['GET, PUT, POST, DELETE, OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.get('/', function (req, res) {
  res.render('index', {names: ['foo', 'bar', 'baz']});
});

app.get('/callback', passport.authenticate('auth0', {
  failureRedirect: '/url-if-something-fails',
  successRedirect: '/'
}));

app.listen(config.port);
console.log('Server up at port %d', config.port);
