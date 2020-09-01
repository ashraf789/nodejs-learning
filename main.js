var express = require('express');
var app = new express();

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});
app.listen(port);