var express = require('express');
var loginController = require('./controllers/loginController');
var mysql = require('mysql');
var app = express();
var port = process.env.PORT || 3000;

/// middleware
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log("Request URL: "+req.url);
    next();
});

// Set view rendering engine
app.set('view engine', 'ejs');

// API
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:name', function(req, res) {
    res.render('person', {name: req.params.name, query: req.query.query});
});

app.get('/mysql', function(req, res) {
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodejs"
    });

    conn.query('SELECT *FROM customers', function(err, row) {
        if(err) throw err;
        console.log(row[0]);
    });
    res.send("Test");
});

loginController(app);

// run server
app.listen(port);