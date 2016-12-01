function sortType(arr){
    
    var sorted = {
        numbers: [],
        strings: [],
        arrays: [],
        objects: [],
        other: []
    }
    
    arr.forEach(function(item){
        switch(item.constructor){
            case Number:
                sorted.numbers.push(item);
                break;
            case String:
                sorted.strings.push(item);
                break;
            case Array:
                sorted.arrays.push(item);
                break;
            case Object:
                sorted.objects.push(item);
                break;
            default:
                sorted.other.push(item);
        }
    })

    return sorted;
}

console.log(sortType([1, 4, 3, 23, "candy", "corn", "is", "the", "best", [1],["dogs", 2], { keys: "values", numbers: 7}]));