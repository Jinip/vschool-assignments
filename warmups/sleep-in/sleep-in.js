function sleepIn(weekday, vacation){
    return vacation === true ? true : (weekday === false ? true : false);
}

console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(false, false));