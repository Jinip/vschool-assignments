function sleepIn(weekday, vacation){
    return vacation || !weekday;
}

console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(false, false));