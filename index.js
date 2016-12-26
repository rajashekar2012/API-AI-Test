/*var apiai = require('apiai');
 
var app = apiai("68d79c9d5c5a42e1a4395b72ed58f6ac");
 
var request = app.textRequest('how much did john scored', {
    sessionId: '123456'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();*/

var express = require('express');
var app = express();

//heroku
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {

	var response={
		"speech":"john has scored 150 marks.",
		"displayText":"john has scored 1000 marks.",
		"data":{},
		"contextOut":[],
		"source":"some source"

	};


   console.log("Got a POST request for the homepage");
   res.send(response);
});

var server = app.listen(app.get('port'), function () {

   //var host = server.address().address
  // var port = server.address().port
	console.log('Node app is running on port', app.get('port'));
  // console.log("Example app listening at http://%s:%s", host, port)
});


/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});*/