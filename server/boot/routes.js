var loopback = require('loopback');
module.exports = function(app) {
  app.use(loopback.static(require('path').join(__dirname, '..', '../dist')));
  app.get('/', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/onetrip', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/login', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/rooms', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/rooms/search', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/register', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/app', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
  app.get('/app/*', function(req, res) {
    res.sendFile(require('path').join(__dirname + '/../../dist/index.html'))
  });
}
