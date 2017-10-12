var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

// Localización de los ficheros estÃ¡ticos
app.use(express.static(__dirname + '/public'));

// Muestra un log de todos los request en la consola
app.use(bodyParser.json());

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api', require('./server/routes/api') );

// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
	console.log('App listening on port 8080');
});