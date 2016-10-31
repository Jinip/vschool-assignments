function longestWord(str){
    var arr = str.split(" ");
    var longest = arr[0];
    
    arr.forEach(function(item){
        if (item.length > longest.length){
            longest = item;
        }
    })
    
    console.log(longest.length);
}

longestWord("N");