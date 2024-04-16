const SecretManagerClient = require('./aws_secretmanager_util');
const { getTweets } = require('./getTweets');
SecretManagerClient.getSecretValues(process.env.TWEETER_KEYS, (err, secretValue) => {
  if (err) {
    console.error('Error getting secret value:', err);
  } else {
    console.log('Secret value:', secretValue);
  }
});

  module.exports = getTweets;
