// Call dependencies
var express = require("express");

// Express call
var app = express();
var PORT = process.env.PORT || 3000;

//Handle data parsing with Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// API 
require("./routing/apiRoutes")(app);

// Home and survey
require("./routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listener on PORT: "+PORT);
});