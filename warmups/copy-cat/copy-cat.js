function copyCat(obj){
    var newObj = {};
    
    for (key in obj){
        if (obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    
    return newObj;
}

var obj = {
    name: "Muhammad Ali",
    genus: "betta",
    species: "splendens",
    color: "blue",
    sex: "male"
}

console.log(copyCat(obj));