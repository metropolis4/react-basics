var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.static(__dirname))
app.get('/', function(req,res) {
  res.render('index');
});
app.listen(9876, function() {
  console.log("app is listening... 9876");
});
