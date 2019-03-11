var Router = require('express-promise-router');
var r = Router();

// this version use async function as implement code
// it's easier for async process, such as db access

r.get('/user', async function(req, res) {
  res.send([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
  ]);
});

module.exports = r;
