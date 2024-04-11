//portfolio
const express = require('express');
const router = express.Router();
const ZemgDBReader = require('../public/javascripts/aws_dynamodb_util');
//var getTweets = require('../public/javascripts/x-timeline-util');

const tweets = [
  { text: 'Tweet 1' },
  { text: 'Tweet 2' },
  { text: 'Tweet 3' },
  { text: 'Tweet 4' },
  { text: 'Tweet 5' }
  // ... more tweets
];

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
  console.log(idportfolio);
  dbReader.getPortfolioById(idportfolio)
    .then((data) => {
        // Access the items from the result
        var user = data.Items[0];
        console.log(user);
        if (typeof user === 'undefined') {
          return res.status(400).send('No data found for the given portfolio id');
        } else {
          res.render('portfolio', { user: user, tweets });
        }

    })
    .catch((err) => {
        console.error("Error:", err);
    });
    // getTweets(user.twitter_user_name, 5, function(tweets) {
    //   res.render('portfolio', { user, tweets });
    // });
});

module.exports = router;