var express = require("express");

var app = express();

var fishes = [
    {
        name: "neon tetra",
        type: "characin"
    },
    {
        name: "lemon tetra",
        type: "characin"
    },
    {
        name: "pearl gourami",
        type: "anabantid"
    },
    {
        name: "betta",
        type: "anabantid"
    },
    {
        name: "dwarf gourami",
        type: "anabantid"
    },
    {
        name: "dwarf cory",
        type: "catfish"
    },
    {
        name: "oscar",
        type: "cichlid"
    },
    {
        name: "angelfish",
        type: "cichlid"
    }
]

app.get("/fishes", function (req, res) {
    console.log(req.query !== undefined);
    var query = req.query;
    var resArr = [];
    if (query.name || query.type) {
        if (query.name && query.type) {
            fishes.forEach(function (fish) {
                if (fish.name === query.name && fish.type === query.type) {
                    resArr.push(fish);
                }
            })
            return res.send(resArr);
        } else {
            fishes.forEach(function (fish) {
                for (key in req.query) {
                    if (fish.hasOwnProperty(key)) {
                        if (fish[key] === req.query[key]) {
                            resArr.push(fish);
                        }
                    }
                }
            })
        }
        return res.send(resArr);
    } else {
        return res.send(fishes);
    }
})

app.listen("8080", function () {
    console.log("Server listening on port 8080");
})