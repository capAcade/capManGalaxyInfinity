const express = require('express');
const router = express.Router();
import defaultGameConfig from './assets/gameConfig.json'

// Get config
router.get('/config', function (req, res) {
  res.json(defaultGameConfig);
});

// Save config

export default router;
