var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
app.use(bodyParser());
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.post('/info', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    fs.createReadStream(files.fileContent.path).pipe(fs.createWriteStream('./img/' + files.fileContent.name));
  })
  form.on('end', function () {
    res.send('success')
  })
})
app.listen('1121', function () {
  console.log('listen 1121')
})



