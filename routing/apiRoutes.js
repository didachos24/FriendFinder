// Dependencies
var friends = require("../app/data/friends");

// Routing

module.exports = function(app) {
    // Display data of matching friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData)
    });

    // Post user's info 
    app.post("/survey", function(req, res) {
        friendsData.push(req.body);
        res.json(true);
    })

}