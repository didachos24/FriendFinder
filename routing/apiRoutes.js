// Dependencies
var friends = require("../app/data/friends");

// Routing

module.exports = function(app) {
    // Display data of matching friends
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    // Post user's info 
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });

};