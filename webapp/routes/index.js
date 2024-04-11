var express = require('express');
var router = express.Router();
var ZemDBReader = require('../services/aws_dynamodb_util'); // adjust the path as needed

/* GET home page. */
router.get('/', function(req, res, next) {
  const actualDate = new Date().toLocaleDateString();
  var dbReader = new ZemDBReader();
  dbReader.getPortfolios()
    .then((data) => {
      var portfolios = data.Items;
      res.render('index', { actualDate: actualDate, portfolios: portfolios });
    })
    .catch((err) => {
      console.error("Error:", err);
      return res.status(500).send('Error getting portfolios');
    });
});

module.exports = router;