var http = require('http');
var express = require("express");

var app = express();
var bodyParser = require('body-parser');
var router = express.Router();


app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname+ '/bower_components'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8888;

app.listen(port);
console.log("Magic happens on port " + port);
