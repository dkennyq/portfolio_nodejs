// history.js
const express = require('express');
const router = express.Router();

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10'
];

router.get('/history', (req, res) => {
  res.render('history', { items });
});

module.exports = router;