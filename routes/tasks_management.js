const express = require('express');
const router = express.Router();

// Example placeholder route
router.get('/', (req, res) => {
  res.send('Tasks API placeholder');
});

module.exports = router;