var app = angular.module("auth");

app.controller("LogoutController", ["$scope", "UserService", function($scope, UserService){
    UserService.logout();
}])