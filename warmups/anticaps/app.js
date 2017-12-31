//return an array of strings with all uppercase characters converted to lowercase

function antiCaps(arr){
    for (var i = 0; i < arr.length; i++){
        var lowerStr = "";
        for (var j = 0; j < arr[i].length; j++){
            if (arr[i][j] === arr[i][j].toLocaleUpperCase()){
                lowerStr += arr[i][j].toLowerCase();
            } else {
                lowerStr += arr[i][j];
            }
        }
        arr[i] = lowerStr;
    }
    return arr;
}

console.log(antiCaps(["ThIS", "iS", "mEsSed", "Up", "tEXT"])); // ["this", "is", "messed", "up", "text"]