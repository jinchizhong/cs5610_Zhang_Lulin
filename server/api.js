var Router = require('express').Router;

var r = Router();

r.get('/user', function(req, res) {
  res.send([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
  ]);
});

module.exports = r;
