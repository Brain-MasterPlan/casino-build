    const express = require('express');
    const bodyParser = require('body-parser');
    const MongoClient = require('mongodb').MongoClient;
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const uri = "mongodb+srv://gitwmike:Mynewernew1@cluster0-111xx.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    client.connect(err => {
        if (err) {
            console.error('Failed to connect to MongoDB', err);
            process.exit(1);
        }
        console.log('Connected to MongoDB');
        const collection = client.db("test").collection("users");
        // API routes
        app.get('/', (req, res) => res.send('Welcome to my API!'));
        app.get('/users', (req, res) => {
            collection.find({}).toArray((err, data) => {
                if (err) {
                    res.send("The request has timed out. Please check your connection and try again.");
                }
                return res.json(data);
            });
        });
        app.post('/users', (req, res) => {
            collection.insertOne({ name: req.body.name })
            .then(result => {
                res.send("User successfully added!");
            }, err => {
                res.send("An application error has occurred. Please try again.");
            });
        });
        // Start the server
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    });

