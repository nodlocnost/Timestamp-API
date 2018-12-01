const express = require('express');
const app = express();
const moment = require('moment');

app.get('', (req, res) =>{
  res.send("Timestamp API.");
})

app.get('/:date', (req, res) =>{
  var numb = Number(req.params.date);
  if (isNaN(numb)) {
    var dateData = Date.parse(req.params.date);
  }
  else{
    var dateData = new Date(numb*1000);
  }
  if (isNaN(dateData)) {
    res.send({'unix':null,'natural':null});
  }
  else{
    res.send({'unix':dateData/1000, 'natural':moment(dateData).format("MMMM Do, YYYY")});
  }
});

var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });