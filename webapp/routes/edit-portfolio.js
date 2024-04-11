//portfolio
const express = require('express');
const router = express.Router();
const ZemgDBReader = require('../public/javascripts/aws_dynamodb_util');

// router.
router.get('/edit-portfolio', (req, res) => {
    res.status(400).send('Missing URL parameter idportfolio');
  });

  router.get('/edit-portfolio/:id', (req, res) => {
    const idportfolio = parseInt(req.params.id, 10);
    if(!idportfolio) {
      return res.status(400).send('Missing URL parameter portfolio id');
    }
    
    var dbReader = new ZemgDBReader();
    console.log(idportfolio);
    dbReader.getPortfolioById(idportfolio)
      .then((data) => {
          // Access the items from the result
          var user = data.Items[0];
          console.log(user);
          if (typeof user === 'undefined') {
            return res.status(400).send('No data found for the given portfolio id');
          } else {
            res.render('edit-portfolio', { user: user });
          }
  
      })
      .catch((err) => {
          console.error("Error:", err);
      });
  });

  router.post('/edit-portfolio/:id', function(req, res) {
    res.status(501).send('Not implemented');
  });
module.exports = router;