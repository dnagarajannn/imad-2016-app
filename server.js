var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter',function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/test-db',function(req,res) {
   // make a select request
   // return a response with result
   
});

app.get('/ui/nagarajan_photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nagarajan_photo.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80

app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
