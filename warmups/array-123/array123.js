function array123(arr){
    var str = arr.join("");
    return str.indexOf("123") === -1 ? false : true;
}

console.log(array123([1, 1, 2, 3, 1])); // true  
console.log(array123([1, 1, 2, 4, 1])); // false  
console.log(array123([1, 1, 2, 1, 2, 3])); // true  