var arr = ["ThIS", "sI", "mEsSed", "Up", "tEXT"];

for (var i = 0; i < arr.length; i++){
    arr[i] = antiCaps(arr[i]);
}

console.log(arr);

function antiCaps(str){
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (isCaps(str[i])){
            newStr = newStr + str[i].toLowerCase();
        } else {
            newStr = newStr + str[i].toUpperCase();
        }
    }
    return newStr;
}

function isCaps(letter) {
  return letter === letter.toUpperCase();
}