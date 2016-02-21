var Fetch = require('whatwg-fetch'),
    baseUrl = 'http://localhost:6060/flickrItems';

var service = {
  get: function(){
    console.log("Fetch: ",fetch(baseUrl));
    return fetch(baseUrl)
      .then(function(response){
        return response.json();
    });

  }
}

module.exports = service;
