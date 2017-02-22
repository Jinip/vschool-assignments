var app = angular.module("app");

app.directive("navbar", ["UserService", function(UserService){
    return {
        templateUrl: "js/components/directives/navbar/navbar.html",
        link: function($scope){
            $scope.isAuthenticated = UserService.isAuthenticated();
            $scope.user = UserService.getUser();
            console.log($scope.user);
        }
    } 
}])