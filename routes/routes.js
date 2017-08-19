var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trello/:id', function(req, res, next) {
  res.render('trello', { id: req.params.id });
});

router.post('/trello/submit', function(req, res, next) {
  id = req.body.id 
  res.redirect('/trello/' + id )
});

router.get('/cards', function(req, res, next) {
});

router.get('/newCard', function(req, res, next) {
});

module.exports = router;
