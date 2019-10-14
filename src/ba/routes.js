const express = require('express');
const router = express.Router();

// Get config
router.get('/config', function (req, res) {
  res.json({});
});

// Save config

module.exports = router;
