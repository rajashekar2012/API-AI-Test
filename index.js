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


//static data
var data={
  "john":{
    "score":58,
    "2014":54,
    "2015":65
  },
  "linda":{
    "score":68,
    "2014":89,
    "2015":99
  }
};


// This responds a POST request for the homepage
app.post('/', function (req, res) {

var _data;

 req.on('data', function (chunk) {
    _data += chunk;
    console.log(_data);
  });

/*console.log("data:");
console.log(_data);*/

/*var name=_data["result"]["parameters"]["given-name"];
name=name.toLowerCase();

var date=_data["result"]["parameters"]["date-period"]; // 2015-01-01/2015-12-31
var marks;

if(date=="")
  marks=data[name][score];
else
{
  date=date.split("/")[0].substr(0,4);
  marks=data[name][date];
}

console.log("marks:"+marks);
console.log("date:"+date);


	var response={
		"speech":"john has scored "+marks+" marks.",
		"displayText":"john has scored "+marks+" marks.",
		"data":{},
		"contextOut":[],
		"source":"some source"

	};*/

   console.log("Got a POST request for the homepage");
   //res.send(response);
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