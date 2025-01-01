/* global use, db */
// MongoDB Playground for my-app

// Select the database to use.
use('MasterPlan'); // Change 'my-app' to match your database name

// Insert sample player documents into the players collection.
db.getCollection('players').insertMany([
  {
    username: 'player1',
    password: 'securepassword1', // In practice, passwords should be hashed
    credits: 100,
    createdAt: new Date(),
  },
  {
    username: 'player2',
    password: 'securepassword2', // In practice, passwords should be hashed
    credits: 200,
    createdAt: new Date(),
  },
]);

// Find all players with credits greater than 100.
const highCreditPlayers = db.getCollection('players').find({
  credits: { $gt: 100 },
}).toArray();

console.log('Players with credits greater than 100:', highCreditPlayers);

// Update the credits of a specific player (example: player1).
db.getCollection('players').updateOne(
  { username: 'player1' }, // Match criteria
  { $inc: { credits: 50 } } // Increment credits by 50
);

// Find all players to verify the update.
const allPlayers = db.getCollection('players').find().toArray();
console.log('All players:', allPlayers);

// Run an aggregation to calculate the total credits across all players.
const totalCredits = db.getCollection('players').aggregate([
  { $group: { _id: null, totalCredits: { $sum: '$credits' } } },
]).toArray();

console.log('Total credits across all players:', totalCredits);
