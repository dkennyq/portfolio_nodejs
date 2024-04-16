//portfolio
const express = require('express');
const router = express.Router();
const PortfolioApiUtil = require('../services/portfolio-api-util');

// router.
router.get('/edit-portfolio', (req, res) => {
    res.status(400).send('Missing URL parameter idportfolio');
  });

  router.get('/edit-portfolio/:id', (req, res) => {
    const idportfolio = parseInt(req.params.id, 10);
    if(!idportfolio) {
      return res.status(400).send('Missing URL parameter portfolio id');
    }
    
    const portfolio = new PortfolioApiUtil();
    portfolio.getPortfolioById(idportfolio)
      .then((userPortfolio) => {
          // Access the items from the result
          if (typeof userPortfolio === 'undefined') {
            return res.status(400).send('No data found for the given portfolio id');
          } else {
            res.render('edit-portfolio', { user: userPortfolio });
          }
  
      })
      .catch((err) => {
          console.error("Error:", err);
      });
  });

  router.post('/edit-portfolio/:id', function(req, res) {
    const portfolio = new PortfolioApiUtil();
    portfolio.putPortfolio(req.body, parseInt(req.params.id, 10))
      .then((userPortfolio) => {
        res.redirect('/portfolio/' + req.params.id);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  });
module.exports = router;