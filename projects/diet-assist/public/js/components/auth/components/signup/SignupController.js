var app = angular.module("auth");

app.controller("SignupController", ["$scope", "UserService", "$location", function($scope, UserService, $location){
    $scope.alert = "";
    
    $scope.signUp = function(newUser){
        UserService.signUp(newUser)
            .then(function(response){
                if (response.data.success === false){
                    return $scope.alert = response.data.message;
                } else {
                    alert(response.data.message);
                    $location.path("/login");
                }
            })
    }
}])