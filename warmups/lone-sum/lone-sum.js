////write a function that returns the sum of three numbers. However, if any number is repeated, that number is not added to the total sum.
//
//// loneSum(1, 2, 3) > 6
//// loneSum(3, 2, 3) > 2
//// loneSum(3, 3, 3) > 0
//
//function loneSum(a, b, c) {  
//    if (a === b){
//        if (b === c){
//            return 0;
//        } else {
//            return c;
//        }
//    } else if (a === c){
//        return b;
//    } else if (b === c){
//        return a;
//    } else {
//        return a + b + c;
//    }
//}
//
//console.log(loneSum(1, 1, 3)); //3
//console.log(loneSum(3, 4, 3)); //4
//console.log(loneSum(5, 3, 3)); //5
//console.log(loneSum(1, 2, 3)); //6
//console.log(loneSum(3, 3, 3)); //0

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
    
    if (allItems.length > 0){
         return allItems.reduce(function(a, b){
            return a + b;
        })
    } else {
        return 0;
    }
}

console.log(loneSum(1, 2, 2, 3)); //4
console.log(loneSum(2, 2)); //0
console.log(loneSum(2, 2, 1)) //1
console.log(loneSum(3, 4, 5, 3, 1)); //10
