function sum(numOne, numTwo){
    return numOne + numTwo;
}

var largest = function(numOne, numTwo, numThree){
    var largest = numOne;
    
    if (numTwo > largest) largest = numTwo;
    if (numThree > largest) largest = numThree;
    
    return largest;
}

function evenOrOdd(num){
    var result = (num % 2 === 0) ? "even" : "odd";
    return result;
}

var bestLength = function(str){
    var result = (str.length < 20) ? str + str : str.substr(0, (str.length / 2));
    return result;
}

function fibonacci(n){
    var sequence = [0,1];
    var request = [];
    var total = 0;
    
    if (sequence.length < n){
        for (var i = sequence.length - 1; sequence.length < n; i++){
            sequence.push(sequence[i] + sequence[i - 1]);
        }
    }
    
    for (var i = 0; i < n; i++){
        request.push(sequence[i].toString());
    }
    
    for (var i = 0; i < request.length; i++){
        total += sequence[i];
    }
    
    console.log(request);
    
    return total;
}

function quadratic(a,b,c){
    var negB = b * -1;
    var root = Math.sqrt(((b * b) - (4 * a * c)));
    var denominator = 2 * a;
    var plusNumerator = negB + root;
    var minusNumerator = negB - root;
    
    var plusAns = plusNumerator / denominator;
    var minusAns = minusNumerator / denominator;
    
    return [plusAns, minusAns];
}

