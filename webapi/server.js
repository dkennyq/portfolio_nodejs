// server.js
const express = require('express');
const api = require('./api-portfolio');

const app = express();
const PORT = 3001;

app.use(express.json());

// setup endpoints
app.get('/currentDate', api.currentDate);
app.post('/add', api.add);

// start server.
app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});
