var express = require("express");

var app = express();

app.listen(process.env.PORT || 3000, listening)

function listening()
{
    console.log("Listening ...");
}

app.use(express.static('web'));

