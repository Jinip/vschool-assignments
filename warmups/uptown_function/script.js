function joinArr(arr){
    arr = arr.join(" ");
    console.log(arr);
}

function joinReverse(arr){
    arr = arr.reverse().join(" ");
    console.log(arr);
}

function joinEveryOther(arr){
    for (var i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            arr.splice(i, 1);
        }
    }
    arr = arr.join(" ");
    console.log(arr);
}

function reverseEveryOther(arr){
    var temp;
    for (var i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }
    arr = arr.join(" ");
    console.log(arr);
}