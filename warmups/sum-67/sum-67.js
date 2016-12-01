function sum67(arr) {
    var sum = 0;
    if (!arr || arr.length === 0) {
        return 0;
    }
    
    var sixIndex;
    var followingSevenIndex;
    while (arr.indexOf(6) !== -1) {
        sixIndex = arr.indexOf(6);
        followingSevenIndex = arr.indexOf(7, sixIndex);
        arr.splice(sixIndex, (followingSevenIndex - sixIndex + 1));
    }
    
    arr.forEach(function(num){
        sum += num;
    })
    
    return sum;
}

console.log(sum67([1, 2, 2])) // 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7])) // 5
console.log(sum67([1, 1, 6, 7, 2])) // 4
console.log(sum67()); // 0
console.log(sum67([])); // 0
console.log(sum67([1, 2, 6, 5, 4, 7, 7, 6, 5, 1, 7, 12])) //22