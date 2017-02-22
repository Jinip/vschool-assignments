var primes = [2, 3];

for (var x = 5; x < 10000; x += 2){
    for (var y = 1; y < primes.length; y++){
        var newPrime = true;
        if (x % primes[y] === 0){
            newPrime = false;
            break;
        }
    }
    if (newPrime){
        primes.push(x);
    }
}

console.log(primes);