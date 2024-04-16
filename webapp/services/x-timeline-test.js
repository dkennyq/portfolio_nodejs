const needle = require('needle');

const url = 'https://api.twitter.com/2/users/by/username/nodejs';
const options = {
  headers: {
    Authorization: 'Bearer '
  },
  rejectUnauthorized: false
};

needle.get(url, options, (error, response) => {
  if (!error && response.statusCode === 200) {
    console.log(response.body);
  } else {
    console.error(error || response.statusCode);
  }
});
