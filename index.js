var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

function getShortName(fullname) {
  var template = /([a-zA-Z]+)(\s+)?([a-zA-Z]+)?(\s+)?([a-zA-Z]+)?(\s+)?([a-zA-Z]+)?(\s*)?/;
  var shortNameTemplate = fullname.match(template);
  var shortName = shortNameTemplate[1];
  if(shortNameTemplate[3]) {
	shortName = shortName + ' ' + shortNameTemplate[3][0] + '.';
  }
  if(shortNameTemplate[5]) {
	shortName = shortName + ' ' + shortNameTemplate[5][0] + '.';
  }  
  if(shortNameTemplate[7]) {
    return 'Invalid fullname';
  } else {
    return shortName;
  }
}

app.get('/', function (req, res) { 
  res.send(getShortName(req.query.fullname)); 
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
