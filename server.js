var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world');
});

var server = app.listen(7070, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('New app listening at http://%s:%s', host, port);
});