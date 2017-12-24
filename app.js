var express = require('express');

var app = express();

app.get('/*', function(req, res){
    var url = req.url;
    if(isNaN(url)){
        console.log("hello world");
    }
    else{
        console.log("fail");
    }
});

app.listen(3000);