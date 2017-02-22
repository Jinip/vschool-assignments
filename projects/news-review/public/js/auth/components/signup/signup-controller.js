var app = angular.module("auth");

app.controller("SignupController", ["$scope", "UserService", "$location", function($scope, UserService, $location){
    $scope.signup = function(newUser, passwordRepeat){
        if (newUser.password === passwordRepeat){
            UserService.signup(newUser)
                .then(function(res){
                    $scope.alert = res.message;
                    if (res.success){
                        $location.path("/login/");
                    }
                })
        } else {
            $scope.alert = "Passwords do not match. Please try again."
        }
    }
}])