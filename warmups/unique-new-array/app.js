function findUniques() {
    var allItems = [];
    var duplicates = [];
    
    for(arg in arguments){
        allItems = allItems.concat(arguments[arg]);
    }

    allItems.forEach(function(item, index){
        if (allItems.indexOf(item) !== index && duplicates.indexOf(item) === -1){
            duplicates.push(item);
        }
    })
    
    duplicates.forEach(function(dupe){
        while (allItems.indexOf(dupe) !== -1){
            allItems.splice(allItems.indexOf(dupe), 1);
        }
    })

    return allItems;
}

console.log(findUniques([1, 2, 5, 12], [1, 2, 8, 7, 9, 10], [2, 1, 3, 7, 8, 9, 3, 4], [4, 6, 9, 12]));


function loneSum() {
    var allItems = [];
    var duplicates = [];
    var total = 0;
    
    for(arg in arguments){
        allItems.push(arguments[arg]);
    }

    allItems.forEach(function(item, index){
        if (allItems.indexOf(item) !== index && duplicates.indexOf(item) === -1){
            duplicates.push(item);
        }
    })
    
    duplicates.forEach(function(dupe){
        while (allItems.indexOf(dupe) !== -1){
            allItems.splice(allItems.indexOf(dupe), 1);
        }
    })
    
    total = allItems.reduce(function(a, b){
        return a + b;
    })
    
    return total;
}

console.log(findUniques([1, 2, 5, 12], [1, 2, 8, 7, 9, 10], [2, 1, 3, 7, 8, 9, 3, 4], [4, 6, 9, 12]));

