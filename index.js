var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

function getShortName(fullname) { 
  var template = /([a-zA-Zа-яА-Яó]+)(\s+)?([a-zA-Zа-яА-Яó]+)?(\s+)?([a-zA-Zа-яА-Яó]+)?(\s+)?([a-zA-Zа-яА-Яó]+)?(\s*)?/;

  var shortNameTemplate = fullname.match(template);
  var shortName;
  if(!fullname) {
    shortName = 'Invalid fullname';
  }
  else if(shortNameTemplate[7] || !fullname) {
    shortName = 'Invalid fullname';
  }
  else if(shortNameTemplate[5]) {
	shortName = shortNameTemplate[5] + ' ' + shortNameTemplate[1][0] + '. ' + shortNameTemplate[3][0] + '.' ;
  } 
  else if(shortNameTemplate[3]) {
	shortName = shortNameTemplate[3] + ' ' + shortNameTemplate[1][0] + '.' ;
  } else {
   shortName = shortNameTemplate[1];
  }
   
  
  return shortName;
  
}

app.get('/', function (req, res) { 
  res.send(getShortName(req.query.fullname)); 
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
