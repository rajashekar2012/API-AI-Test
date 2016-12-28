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
//var bodyParser = require('body-parser');

var app = express();

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
*/

//heroku
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!')
});


//static data
var data={
  "john":{
    "score":58,
    "2013":44,
    "2014":54,
    "2015":65
  },
  "linda":{
    "score":68,
    "2013":57,
    "2014":89,
    "2015":99
  }
};


// This responds a POST request for the homepage
app.post('/', function (req, res) {

 var _data;
 var response={};
 var speechText="";

 req.on('data', function (chunk) {
    //_data += chunk;

     console.log("indide req.on");

    _data= chunk.toString('utf8');
    _data=JSON.parse(_data);   

   //console.log(_data["result"]["parameters"]["given-name"]);

    var name=_data["result"]["parameters"]["given-name"];
    name=name.toLowerCase();

    var date=_data["result"]["parameters"]["date-period"]; // 2015-01-01/2015-12-31
    var marks;

    if(date=="")
    {
      marks=data[name]["score"];
      speechText= name +" has scored "+marks+" marks."
    }
    else
    {

      var arr=date.split("/"); //.substr(0,4);
      var msg="";

      var year1=arr[0].substr(0,4);
      var year2=arr[1].substr(0,4);

        for (var i =year1; i <= year2; i++) {

          //var year=arr[i].substr(0,4);

          msg=msg+data[name][i]+" in "+i+",";
        //marks=data[name][date];

        //speechText= name +" has scored "+marks+" marks  in "+date;
      }

      msg=msg.substr(0,msg.length-1);
      speechText=name+" has scored "+msg;
    }

    //console.log("marks:"+marks);
    //console.log("date:"+date);


      response={
        "speech":speechText,
        "displayText":speechText,
        "data":{},
        "contextOut":[],
        "source":"some source"
      };

 console.log(response);
 
  });

/*req.on('end', function () {
    console.log('_data: ' + _data);
    var jsonObj = JSON.parse(_data);
  })*/

/*console.log("data:");
console.log(_data);*/



   console.log("Got a POST request for the homepage");

   //console.log(response);
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