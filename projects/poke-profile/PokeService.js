var app = angular.module("app");

app.service("PokeService", ["$http", function($http){
    var self = this;
    this.poke = {};
    this.getPokemon = function(num){
        return $http.get("http://pokeapi.co/api/v1/pokemon/" + num)
            .then(function(response){
                console.log(response.data);
                self.poke.name = response.data.name;
                self.poke.ability = response.data.abilities[0].name;
                self.poke.spriteUrl = "images/sprites/sprites/pokemon/" + num + ".png";
                return self.poke;
                //return $http.get("http://pokeapi.co/" + response.data.sprites[0].resource_uri);
            })
//            .then(
//                function(response){
//                    self.poke.spriteUrl = "http://pokeapi.co" + response.data.image;
//                    return self.poke;
//            },  function(response){
//                    self.poke.spriteUrl = "images/sprites/sprites/pokemon/" + num + ".png";
//                    return self.poke;
//            })
    }
}])