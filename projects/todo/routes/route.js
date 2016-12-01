var express = require("express");
var uuid = require("uuid");
var router = express.Router();

var todos = [];

router.route("/")
    .get(function (req, res) {
        res.send(todos);
    })
    .post(function (req, res) {
        var todo = req.body;
        todo.id = uuid.v4();
        todo.completed = false;
        todos.push(todo);
        res.send(todo);
    })

router.route("/:id")
    .get(function (req, res) {
        todos.forEach(function (todo) {
            if (todo.id = req.params.id) {
                res.send(todo);
            }
        })
    })
    .put(function (req, res) {
        todos.forEach(function (todo, index) {
            if (todo.id = req.params.id) {
                for (key in req.body) {
                    if (todo.hasOwnProperty(key) && key !== "id") {
                        todo[key] = req.body[key];
                    }
                }
                todos[index] = todo;
                res.send(todo);
            }
        })
    })
    .delete(function (req, res) {
        todos.forEach(function (todo, index) {
            if (todo.id = req.params.id) {
                todos.splice(index, 1);
                res.send(todos);
            }
        })
    })

module.exports = router;