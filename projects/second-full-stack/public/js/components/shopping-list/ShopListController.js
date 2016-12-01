var app = angular.module("app");

app.controller("ShopListController", ["$scope", "ShopListService", function($scope, ShopListService){
    $scope.shoppingList = ShopListService.shoppingList;
    
}])