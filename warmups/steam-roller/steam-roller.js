function flatten(arr){
    var flattened = [];
    arr.forEach(function(item){
        if (Array.isArray(item)){
            flattened.push(item[0]);
        } else {
            flattened.push(item);
        }
    })
    return flattened;
}

var arr = [1, [2], [3, [[4]]]];

console.log(flatten(arr));