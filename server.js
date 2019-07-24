// SERVER SET UP ---------------------------------------

var express = require("express");
var path = require("path");

//set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//allow server to use CSS file  ????
// express.static("style.css", [null])
app.use(express.static(__dirname + "/app/css"));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'))


// ROUTING ---------------------------------------------

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER -------------------------------------------

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

module.export = app;

