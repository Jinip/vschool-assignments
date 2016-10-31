var app = angular.module("app", []);

app.controller("main", ["$scope", "$http", function($scope, $http){
    $http.get("http://swapi.co/api/films/1")
        .then(function(response){
            $scope.crawl = response.data.opening_crawl;
            console.log($scope.crawl);
    })
}])

//$(document).ready(function(){
//    $(".crawl").css({"top": "-1000px"});
//})