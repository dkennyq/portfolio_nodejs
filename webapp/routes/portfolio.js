//portfolio
const express = require('express');
const router = express.Router();
const ZemgDBReader = require('../services/aws_dynamodb_util');
const { getTweets } = require('../services/x-timeline-util');
// router.
router.get('/portfolio', (req, res) => {
  res.status(400).send('Missing URL parameter idportfolio');
});

router.get('/portfolio/:id', (req, res) => {
  const idportfolio = parseInt(req.params.id, 10);
  if(!idportfolio) {
    return res.status(400).send('Missing URL parameter portfolio id');
  }
  
  var dbReader = new ZemgDBReader();
  dbReader.getPortfolioById(idportfolio)
    .then((data) => {
        // Access the items from the result
        var user = data.Items[0];
        if (typeof user === 'undefined') {
          return res.status(400).send('No data found for the given portfolio id');
        } else {
          // get tweets
          getTweets(user.x_user_name, 5, (tweets) => {
            res.render('portfolio', { user: user, tweets });
          });
        }

    })
    .catch((err) => {
        console.error("Error:", err);
    });
});

module.exports = router;