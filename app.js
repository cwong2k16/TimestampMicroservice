'use strict';

var express = require('express');
var moment = require('moment');

var app = express();

app.get('/*', function(req, res){
    var url = req.url;
    var parsedNum = url.split('/');
    var date = parsedNum[1];

    var jsonDates = {
        unix: null,
        natural: null
    };

    if(!isNaN(date)){ // unix
        var humanDate = moment.unix(date).format('MMMM DD, YYYY');
        jsonDates.unix = date;
        jsonDates.natural = humanDate;
    }
    else{ // check if human readable date
        var splits = date.split("%20").join('');
        
        if(moment(splits, "MMMMDDYYYY").isValid()){
            jsonDates.unix = moment(splits, "MMMMDDYYYY").format("X");
            jsonDates.natural = moment(splits, "MMMMDDYYYY").format("MMMM DD, YYYY");
        }
    }
    res.json(jsonDates);
});

app.listen(3000);