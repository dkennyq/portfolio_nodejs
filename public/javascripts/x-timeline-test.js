const needle = require('needle');

const url = 'https://api.twitter.com/2/users/by/username/nodejs';
const options = {
  headers: {
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAMn4tAEAAAAAXyPM0e6h35eewaeCaTr9fxY%2Bl4E%3DgANPZR5K7AMF7KtwHngfDy8IO0C7Lkr7Y85he72xFbFw6XabDZ'
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
