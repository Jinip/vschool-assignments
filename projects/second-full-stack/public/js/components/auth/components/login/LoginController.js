var app = angular.module("auth");

app.controller("LoginController", ["$scope", "UserService", "TokenService", "$location", function($scope, UserService, TokenService, $location){
    $scope.alert = "";
    
    $scope.login = function(user){
        UserService.login(user)
            .then(function(response){
                if (response.data.success === false){
                    console.log(response.data);
                    return $scope.alert = response.data.message;
                }
                console.log(response.data);
                TokenService.setToken(response.data.token);
                alert(response.data.message);
                $location.path("/meal-plan/");
            })
    }
}])