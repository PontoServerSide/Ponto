/**
 * Sample Node.js Application for test HAProxy
 */
var express = require('express');
var logfmt = require('logfmt');
var os=require('os');
var app = express();

app.use(logfmt.requestLogger());

app.get('/',function(req, res) {

    var ifaces=os.networkInterfaces();
    for (var dev in ifaces) {
        var alias=0;
        ifaces[dev].forEach(function(details){
            if (details.family=='IPv4') {
                console.log(dev + (alias ? ':' + alias : ''), details.address);
                res.send('Hello, World!' + app.env.PORT + dev + (alias ? ':' + alias : ''), details.address);
                ++alias;
                break;
            }
        });
    }
});

var port = Number(process.env.PORT || 4000);
app.listen(port,function() {
    console.log('Listening on '+port);
});
/*
Test3
*/