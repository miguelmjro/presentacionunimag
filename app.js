const port = process.env.PORT || 3000;

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/resources'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});
app.listen(port);
console.log(port + ' is the magic port');