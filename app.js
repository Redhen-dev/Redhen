var express = require('express');
var port = process.env.PORT || 3000;
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('index');
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});