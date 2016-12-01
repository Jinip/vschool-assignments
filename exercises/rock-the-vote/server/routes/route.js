var express = require("express");
var router = express.Router();
var uuid = require("uuid");
var jsonFile = require("jsonfile");
jsonFile.spaces = 4;

var database = "../database/database.json";

router.route("/")
    .get(function (req, res) {
        var data = jsonFile.readFileSync(database)
        res.send(data.issues);
    })
    .post(function (req, res) {
        var data = jsonFile.readFileSync(database);

        var issue = req.body;
        issue.id = uuid.v4();
        issue.votes = {
            upvotes: 0,
            downvotes: 0
        };
        data.issues.push(issue);

        jsonFile.writeFileSync(database, data)

        res.send(issue);
    })

router.route("/:id")
    .put(function (req, res) {
        var data = jsonFile.readFileSync(database);

        for (var i = 0; i < data.issues.length; i++) {
            if (data.issues[i].id === req.params.id) {
                data.issues[i] = req.body;

                jsonFile.writeFileSync(database, data)

                return res.send(req.body);
            }
        }
        res.send("No item with that ID");
    })
    .delete(function (req, res) {
        var data = jsonFile.readFileSync(database);

        for (var i = 0; i < data.issues.length; i++) {
            if (data.issues[i].id === req.params.id) {
                var issue = data.issues[i];
                data.issues.splice(i, 1);

                jsonFile.writeFileSync(database, data);

                return res.send("Deleted: " + issue);
            }
        }
        res.send("No item with that ID");
    })

module.exports = router;