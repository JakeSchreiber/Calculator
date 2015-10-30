var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser'); //interprets stuff on the other side of the server??


var index = require('./routes/index');

app.set("port", process.env.PORT|| 5000);

app.get('/*', function(req,res,next){
    var file = req.params [0] || '/index.html';
    res.sendFile(path.join(__dirname, "./public/views"), file);

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true})); //mounting middleware onto middleware stack app.use

app.use('/', index);


app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});