var bodyParser = require('body-parser');
var urlencoderParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.post('/login', urlencoderParser, function(req, res) {
        res.send('welcome, ' + req.body.username);
    });
};