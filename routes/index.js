var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("start");
  res.render('index', { title: 'Express' });
});
router.get('/sukien', function(req, res) {
	console.log("start");
  res.render('sukien', { title: 'Express' });
});
router.get('/tintuc', function(req, res) {
	console.log("start");
  res.render('tintuc', { title: 'Express' });
});

module.exports = router;
