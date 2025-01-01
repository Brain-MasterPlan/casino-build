const express = require('express');
const { loginPlayer } = require('../controllers/playerController'); // Import the function

const router = express.Router();

// Define the /login endpoint
router.post('/login', loginPlayer);

module.exports = router;
