function isPalindrome(str){
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    var i = 0, j = str.length - 1;
    console.log(str);
    while(i <= j){
        console.log(str[i], str[j]);
        if (str[i] !== str[j]){
            console.log(false);
            return;
        }
        i++
        j--
    }
    console.log(true);
}

isPalindrome("A Santa dog lived as a devil God at NASA");
isPalindrome("That's no moon... it's a space station!");
isPalindrome("Madam, I'd adam");