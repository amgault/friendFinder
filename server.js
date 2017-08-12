var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// express instance
var app = express();

// define the port
var PORT = process.env.PORT || 4000;

// initiate bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require the api routes file to get the routing setup for api's
require('./app/routing/apiRoutes.js')(app);

//require the api routes file to get the routing setup for html
require('./app/routing/htmlRoutes.js')(app);

//initiate server listen
app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});