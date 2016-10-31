var app = angular.module("app", []);

app.controller("pokeController", ["$scope", "PokeService", function ($scope, PokeService) {
    $scope.poke = {};
    $scope.findPoke = function (num) {
        PokeService.getPokemon(num)
            .then(function (response) {
                $scope.poke = response;
            })
    }
}])