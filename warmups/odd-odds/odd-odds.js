function isOdd(num){
    return num % 2 !== 0;
}

function oddOdds(arr){
    arr = arr.filter(function(num){
        return isOdd(num);
        //return num % 2 !== 0;
    })
    
    return isOdd(arr.length);
    //return arr.length % 2 !== 0;
}

console.log(oddOdds([1, 1, 3, 4])); // 3  
console.log(oddOdds([1, 1, 3, 4, 6, 9])); // 4  
console.log(oddOdds([3, 4, 4, 8, 1, 1, 3, 4, 5, 27])); // 6 