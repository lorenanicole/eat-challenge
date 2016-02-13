var express = require('express');
var port = process.env.PORT || 4567;
var app = express();

app.use('/', express.static(__dirname + '/public/'));

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
});

app.listen(port);
