//portfolio
const express = require('express');
const router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'zemoga-test-db.crhpedy9xxto.us-east-1.rds.amazonaws.com',
  user: 'zemoga_test_db',
  password: 'Zem0ga.101',
  database: 'zemoga_test_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});

// SQL query.
var sqlQuery = 'SELECT idportfolio, description, image_url, twitter_user_name, title, address, email, experience, experience_summary, image_path, last_names, name, names, phone, tittle, twitter_user, twitter_user_id, user_id, zip_code' +
' FROM portfolio' +
' WHERE idportfolio = 7000';

// Execute the SQL query.
var getUserPortfolio = function(callback) {
  connection.query(sqlQuery, function(err, results, fields) {
    if (err) throw err;
    console.log(results);

    // Map results to object.
    const user = results.map(result => ({
      idportfolio: result.idportfolio,
      description: result.description,
      image_url: result.image_url,
      twitter_user_name: result.twitter_user_name,
      title: result.title,
      address: result.address,
      email: result.email,
      experience: result.experience,
      experience_summary: result.experience_summary,
      image_path: result.image_path,
      last_names: result.last_names,
      name: result.name,
      names: result.names,
      phone: result.phone,
      tittle: result.tittle,
      twitter_user: result.twitter_user,
      twitter_user_id: result.twitter_user_id,
      user_id: result.user_id,
      zip_code: result.zip_code
    }));
    console.log('user:' + user[0].image_url);
    callback(user);
  });
};

const tweets = [
  { text: 'Tweet 1' },
  { text: 'Tweet 2' },
  { text: 'Tweet 3' },
  { text: 'Tweet 4' },
  { text: 'Tweet 5' }
  // ... more tweets
];

router.get('/portfolio', (req, res) => {
  getUserPortfolio(function(user) {
    console.log('user:' + user[0].image_url);
    res.render('portfolio', { user, tweets });
  });
});

module.exports = router;