const bcrypt = require('bcrypt');
const Player = require('../models/Player'); // Import the Player model

// Login function
exports.loginPlayer = async (req, res) => {
    const { username, password } = req.body;

    try {
        const player = await Player.findOne({ username });

        if (!player || !(await bcrypt.compare(password, player.password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.json({
            username: player.username,
            credits: player.credits,
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};
