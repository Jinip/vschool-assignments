function noDuplicates(input){
    var noDupes = "";
    var dupes = "";
    for (var i = 0; i < input.length; i++){
        (noDupes.indexOf(input[i]) === -1) ? noDupes += input[i] : dupes += input[i]
    }
    console.log("No duplicates: " + noDupes);
    console.log("Misfits: " + dupes);
}