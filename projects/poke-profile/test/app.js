var app = angular.module("app", []);

app.controller("main", ["$scope", function($scope){
    $scope.strings = [
        "this",
        "is",
        "some",
        "strings"
    ]
}])