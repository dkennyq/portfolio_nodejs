var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const actualDate = new Date().toLocaleDateString();
  res.render('index', { actualDate: actualDate });
});

module.exports = router;
