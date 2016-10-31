//var users = require("./" + process.argv[2] +".js");
//var userList = users.userList;
//var sortAscending = process.argv[3] || true;

function sort(userList, sortAscending){
    console.log(sortAscending);
    if (sortAscending){
        userList.sort(function(a, b){
            if (a.lastName < b.lastName){
                return -1;
            } else {
                return 1;
            }
        })
    } else {
        userList.sort(function(a, b){
            if (a.lastName < b.lastName){
                return 1;
            } else {
                return -1;
            }
        })
    }
    return userList;
}

var userList = [
    {
        firstName: "Billy",
        lastName: "Madison", 
        age: 32
    },
    {
        firstName: "Tommy",
        lastName: "Pickles", 
        age: 32
    },
    {
        firstName: "Ray",
        lastName: "Charles", 
        age: 32
    },
    {
        firstName: "Lady",
        lastName: "Gaga", 
        age: 32
    },
    {
        firstName: "Elizabeth",
        lastName: "Taylor", 
        age: 32
    },
    {
        firstName: "Led",
        lastName: "Zeplin", 
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson", 
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug", 
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster", 
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles", 
        age: 32
    }
]

console.log(sort(userList, true));
console.log(sort(userList, false));
//console.log(sort(userList, sortAscending));