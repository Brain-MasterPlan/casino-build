// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('MasterPlan');

// Create a new document in the collection.
db.getCollection('players').insertOne({
    "username": "john_doe",
    "password": "securepassword",
    "credits": 50


});
