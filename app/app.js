var express =  require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );

app.get('/', function(req, res){
   res.send(`
     <h1>R2RO.me</h1>
     <p>Welcome toe r2ro.me</p>
   `);
});

app.get('/speakers', function(req, res){
  var info = '';
  dataFile.speakers.forEach(function(item){
    info += `
     <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
     </li>
    `;
  });
   res.send(`
     <h1>R2RO.me</h1>
     ${info}
   `);
});


var server = app.listen(3000, function(){
    console.log('Listening on Port' + app.get('port'));
});
