var app = angular.module("app", []);

app.controller("main", ["$scope", "$http", function($scope, $http){
    $http.get("http://api.vschool.io:6543/hitlist.json")
        .then(function(response){
            var data = response.data;
            
            for (var item in data){
                if (data[item].name === "Bugs Bunny"){
                    data[item].image = "http://vignette1.wikia.nocookie.net/characters/images/1/15/Bugs.jpg/revision/latest?cb=20110224072532";
                } else if (data[item].name === "Jabba the Hutt"){
                    data[item].image = "http://vignette2.wikia.nocookie.net/slaveleia/images/e/e3/Jabba_licks_his_lips_in_anticipation_of_victory.jpg/revision/latest?cb=20110107202120";
                }
            }
            $scope.data = data;
    })
}])