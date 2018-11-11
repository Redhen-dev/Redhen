var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res) {
    res.send('index');
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});