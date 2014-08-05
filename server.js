// modules
var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configuration
var db = require('./config/db');
var port = process.env.PORT || 8080;

mongoose.connection.on('error', function(err) {
  console.log('DB connection failed, ' + err);
});
mongoose.connect(db.url);

// parse the body of POST requests
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app);

// start app
app.listen(port);
console.log('Listening on port ' + port);
exports = module.exports = app;
