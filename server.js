var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Someday over the rainbow")
});

app.get("/api", function (req, res) {
    db.burger.findAll({}).then(function(data){
        res.json(data);
    })
});

app.post("/api/new", function(req, res){
    db.burger.create(req.body).then(function(data){
        res.json(data);
    })
})

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`App is on http://localhost:${PORT}`)
    })
})