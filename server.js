const express = require("express");
const path = require("path");

// Sets up the express app
//=============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start the server to begin listening
//===============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})

