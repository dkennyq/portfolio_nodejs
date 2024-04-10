const Twit = require('twit');

const T = new Twit({
  consumer_key: 'KRy7l0v8wex3w8Sy5zThai3Ea',
  consumer_secret: 'X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu',
  access_token: '1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja',
  access_token_secret: 'tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj'
});

function getTweets(screen_name, count, callback) {
    T.get('statuses/user_timeline', { screen_name, count }, function(err, data, response) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
      callback(data);
    });
  }
  
  module.exports = getTweets;
