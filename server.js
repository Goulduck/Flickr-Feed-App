var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Request = require('request');
var app = express();


//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var flickrItems = [];

app.get('/flickrItems', function(req, res) {
    console.log("GET From SERVER");
    res.send(flickrItems);
});

app.get('/js/main.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/js/main.js'));
});

app.get('/', function(req, res) {
  var options={
    url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
    headers: {
      'User-Agent': 'request x.y',
      'Content-Type':'application/json'
    }
  }

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var fixedJSON = body.replace('/\\"/g',"'").replace(/\\/g,"");

      var info = JSON.parse(body);
      flickrItems = info.items;
    }
  }

  Request(options, callback);

  res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.listen(6060);
console.log("ALIVE on 6060");
