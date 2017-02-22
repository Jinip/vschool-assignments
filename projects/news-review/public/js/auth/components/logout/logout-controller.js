var app = angular.module("auth");

app.controller("LogoutController", ["UserService", function(UserService){
    UserService.logout();
}])