var Fetch = require('whatwg-fetch'),
    baseUrl = 'http://localhost:6060/flickrItems';
    //baseUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'

var service = {
  get: function(){
    console.log("Fetch: ",fetch(baseUrl));
    return fetch(baseUrl)
      .then(function(response){
        return response.json();
    });

  }
}

/*var Request = require('request');

var service={
  get: function(){

    var options={
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
      headers: {
        'User-Agent': 'request x.y',
        'Content-Type':'application/json'
      }
    }

    function callback(error, response, body) {
      console.log("Inside the function",body);
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log("Info: ",info);
      }
    }

    Request(options, callback);

  }


} */


module.exports = service;
