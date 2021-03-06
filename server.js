var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs')

// Define the port to run on
app.set('port', 3000);

//deliver files directly to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});




//serve get requests for gyms after button pressed
app.get('/gym-wgtn', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym wgtn")
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})

app.get('/gym-akl', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym akl")
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})




app.get('/gym-chch', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym chch")
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})




//
// app.get('/gym-chch', function (req, res) {
//   app.json(['les mills', 'city fitness', 'jetts'])
// })
//
// app.get('/gym-wgtn', function (req, res) {
//   console.log('hit gym wgtn')
// })
//
// app.get('/gym-akl', function (req, res) {
//   console.log('hit gym akl')
// })
