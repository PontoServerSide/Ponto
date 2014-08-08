/**
 * Sample Node.js Application for test HAProxy
 */
var express = require('express');
var logfmt = require('logfmt');
var app = express();

app.use(logfmt.requestLogger());

app.get('/',function(req, res) {
    res.send('Hello, World!' + process.env + "2");
});

var port = Number(process.env.PORT || 4000);
app.listen(port,function() {
    console.log('Listening on '+port);
});

/*
Test3
*/