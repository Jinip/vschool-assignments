var app = angular.module("app", []);

app.controller("main", ["$scope", "$http", function($scope, $http){
    $scope.collapse = false;
    
    $http.get("http://api.vschool.io/jacobpercival/todo")
        .then(function(response){
            $scope.data = response.data;
    })
}])