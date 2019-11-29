var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Miles Blog', testData: process.env.mongostring || "no string"});
});

module.exports = router;
