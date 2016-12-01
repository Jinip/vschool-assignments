//Create a function that take a number n and returns the sum of all even squares from 1 to n
// sumEvenSquares(n); // 20

function sumEvenSquares(n){
    var sum = 0;
    
    for (var i = 1; i <= n; i++){
        var square = i * i;
        if (square % 2 === 0){
            sum += square;
        }
    }
    
    return sum;
}

console.log(sumEvenSquares(5));