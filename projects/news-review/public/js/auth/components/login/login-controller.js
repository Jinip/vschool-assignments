var app = angular.module("auth");

app.controller("LoginController", ["$scope", "UserService", "$location", function($scope, UserService, $location){
    $scope.login = function(username, password){
        UserService.login(username, password)
            .then(function(res){
                if (res.success === false){
                    $scope.alert = res.message;
                } else {
                    $location.path("/home/");
                    UserService.user = {};
                }
            })
    }
}])