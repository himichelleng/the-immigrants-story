var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timeline', function(req, res, next) {
  res.render('timeline', { title: 'Express' });
});

router.get('/icecream', function(req, res, next) {
  res.render('icecream', { title: 'Express' });
});

router.get('/dream', function(req, res, next) {
  res.render('dream', { title: 'Express' });
});

router.get('/pineapple', function(req, res, next) {
  res.render('pineapple', { title: 'Express' });
});


module.exports = router;
