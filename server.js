var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Someday over the rainbow")
});

app.get("/raining", function (req, res) {
    res.send("The sun will come out tomorrow")
});

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`App is on http://localhost:${PORT}`)
    })
})