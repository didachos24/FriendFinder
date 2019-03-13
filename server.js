// Call dependencies
var express = require("express");
var path = require("path");

// Express call
var app = express();
var PORT = 3000;

//Handle data parsing with Express
app.use(express.json());

// Routes

// Home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

// Survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

// Listener
app.listen(PORT, function() {
    console.log("App listener on PORT: "+PORT);
});