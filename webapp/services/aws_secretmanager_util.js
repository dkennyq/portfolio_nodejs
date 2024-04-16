const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

class SecretManagerClient {
    static getSecretValues(secretId, callback) {
    const secretsManager = new AWS.SecretsManager();
    secretsManager.getSecretValue({ SecretId: secretId }, (err, data) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, data.SecretString);
      }
    });
  }
}

module.exports = SecretManagerClient;
