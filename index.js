var express = require('express');
var app = express();
var cors = require('cors');
var Members = require('./models/members');

app.get('/members', cors(), function (req, res) {
  Members.fetchAll({withRelated: 'subscription'}).then(function (members) {
    res.json({error: false, data: members.toJSON()});
  })
  .catch(function(error) {
    console.error(error)
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

module.exports = app;
