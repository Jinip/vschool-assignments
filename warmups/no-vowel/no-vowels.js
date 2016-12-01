//create a function that removes an input string without vowels

function removeVowels(str){
    arr = str.split("");
    vowels = ["a", "e", "i", "o", "u"];
    arr = arr.filter(function(char){
        return vowels.indexOf(char.toLowerCase()) === -1;
    })
    return arr.join("");
}

console.log(removeVowels("The quick brown fox jumped over the lazy dog"));