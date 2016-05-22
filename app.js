var express = require('express');
var bodyparser  = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
//var md5 = require('MD5');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

var server = app.listen(3000, function() {
  console.log('Todo joya!!! Estoy escuchando en el puerto ' + server.address().port);
});
