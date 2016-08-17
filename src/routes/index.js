var express = require('express');
var router = express.Router();
var Facts = require('stupid-facts');
var facts = new Facts();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/fact', function(req, res, next) {
  res.send(facts.generateFact());
});

module.exports = router;
