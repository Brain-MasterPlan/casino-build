const Player = require('./models/Player');

app.get('/api/test', async (req, res) => {
    const players = await Player.find();
    res.json(players);
});
