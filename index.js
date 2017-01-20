var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}


function getShortName(fullname) { 
  if(fullname.match(/\d|_|-|\//)) {
    return 'Invalid fullname';
  }
  var template = /([a-zA-Zа-яА-Яó]+)([\s']+)?([a-zA-Zа-яА-Яó]+)?([\s']+)?([a-zA-Zа-яА-Яó]+)?([\s']+)?([a-zA-Zа-яА-Яó]+)?([\s']*)?/;

  var shortNameTemplate = fullname.match(template);
  var shortName;
  if(!fullname) {
    shortName = 'Invalid fullname';
  }
  else if(shortNameTemplate[7] || !fullname) {
    shortName = 'Invalid fullname';
  }
  else if(shortNameTemplate[5]) {
	shortName = capitalizeFirstLetter(shortNameTemplate[5]) + ' ' + capitalizeFirstLetter(shortNameTemplate[1][0]) + '. ' + capitalizeFirstLetter(shortNameTemplate[3][0]) + '.' ;
  } 
  else if(shortNameTemplate[3]) {
	shortName = capitalizeFirstLetter(shortNameTemplate[3]) + ' ' + capitalizeFirstLetter(shortNameTemplate[1][0]) + '.' ;
  } else {
   shortName = capitalizeFirstLetter(shortNameTemplate[1]);
  }
   
  
  return shortName;
  
}

app.get('/', function (req, res) { 
  res.send(getShortName(req.query.fullname)); 
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
