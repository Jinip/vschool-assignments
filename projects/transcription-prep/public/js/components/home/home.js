var app = angular.module("app");

app.controller("HomeController", ["$scope", "WatsonService", "GrammarService", function($scope, WatsonService, GrammarService){
    $scope.test = "Home Test";
}])