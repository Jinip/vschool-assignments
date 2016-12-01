function luckySum() {
    var sum = 0;
    
    for (arg in arguments) {
        if (arguments[arg] === 13) {
            break;
        } else {
            sum += arguments[arg];
        }
    }
    
    return sum;
}

console.log(luckySum(1, 2, 3)); // 6
console.log(luckySum(1, 2, 13)); // 3
console.log(luckySum(1, 13, 3)); // 1
console.log(luckySum(13, 2, 3)); // 0