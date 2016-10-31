function camelCase(str){
    var splitType = ""
    switch (str){
        case str.indexOf(" ") !== -1:
            splitType = " ";
        case str.indexOf("_") !== -1:
            if (splitType === "") {
                splitType = "_"
            } else {
                console.log("Cannot accept more than one separator (\" \", \"_\", \"-\")");
                return;
            }
        case str.indexOf("-") !== -1:
            if (splitType === "") {
                splitType = "-"
            } else {
                console.log("Cannot accept more than one separator (\" \", \"_\", \"-\")");
                return;
            }
    }
    var split = str.split(splitType);
    for (var i = 0; i < split.length; i++){
        var curStr = split[i];
        if (i = 0){
            split[i].toLowerCase();
        } else {
            cur
        }
    }
    var camel = split.join("");
    return camel;
}