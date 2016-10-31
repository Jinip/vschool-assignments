var app = angular.module("app", []);

app.controller("main", ["$scope", function($scope){
    $scope.badges = [];
    
    $scope.newBadge = function(){
        $scope.badges.push($scope.badge);
        $scope.badge = {};
    }
}])