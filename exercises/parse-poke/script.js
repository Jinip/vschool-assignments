var typeColor = {
    normal: "beige",
    fighting: "red",
    flying: "cornflower",
    poison: "purple",
    ground: "tan",
    rock: "brown",
    bug: "lightgreen",
    ghost: "violet",
    steel: "gray",
    fire: "orange",
    water: "blue",
    grass: "green",
    electric: "yellow",
    psychic: "deeppink",
    ice: "lightblue",
    dragon: "darkmagenta",
    dark: "darkgray",
    fairy: "pink",
};

var typeList = {
     normal: [],
    fighting: [],
    flying: [],
    poison: [],
    ground: [],
    rock: [],
    bug: [],
    ghost: [],
    steel: [],
    fire: [],
    water: [],
    grass: [],
    electric: [],
    psychic: [],
    ice: [],
    dragon: [],
    dark: [],
    fairy: [],
};

$.get("http://pokeapi.co/api/v2/pokemon?limit=721", function(responseText){
    var pokeList = $("#poke-list")
    var mons = responseText.results;
    console.log(mons);
    mons.forEach(function(mon){
        console.log(mon);
        pokeList.html(pokeList.html() + "<li><a href=\"http://bulbapedia.bulbagarden.net/wiki/" + mon.name + "_(Pokemon)\">" + mon.name + "  </a></li>");
    });
    
//    getTypeLists();
})

//function getTypeLists(){
//    for (var i = 1; i < 18; i++){
//        $.get("http://pokeapi.co/api/v2/type/" + (i + 1), function(responseText){
//            var type = responseText.name;
//            var mons = responseText.pokemon;
//
//            typeList[type] = mons;
//            
//        });
//    };
//    $.get("http://pokeapi.co/api/v2/type/normal", function(responseText){
//        typeList["normal"] = responseText.pokemon;
//    } )
//    console.log(typeList)
//    applyColors();
//}
//
//function applyColors(){
//    console.log("Apply Color: " + typeList);
//    var monList = $("li");
//    for (type in typeList){
//        console.log("for each type " + typeList[type]);
//        typeList[type].forEach(function(mon){
//            console.log("for each mon " + mon.name);
//            monList.forEach(function(liMon){
//                console.log("for each list item " + liMon.html());
//                if (liMon.html() === mon.name && mon.slot == 1){
//                    liMon.css("color", typeColor[type]);
//                }
//            })
//            
//        });
//    }
//}