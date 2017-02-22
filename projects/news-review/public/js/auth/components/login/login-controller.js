var app = angular.module("auth");

app.controller("LoginController", ["$scope", "UserService", "$location", function($scope, UserService, $location){
    if (Object.keys(UserService.user).length !== 0){
        $scope.banner = "New account for " + UserService.user.username + " has been created. Please login to continue!";
    }
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