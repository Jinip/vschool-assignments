function firstLast6(arr){
    return arr[0] === 6 || arr[arr.length - 1] === 6
}

console.log(firstLast6([1, 2, 6]));
console.log(firstLast6([6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 3]));