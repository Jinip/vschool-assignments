var app = angular.module("app");

app.controller("HomeController", ["$scope", "HomeService", function ($scope, HomeService) {
//    $scope.items = [];
//
//    HomeService.getItems()
//        .then(function (response) {
//            return $scope.items = response.data;
//        })
//
//    $scope.getItem = function (item) {
//        HomeService.getOneItem(item)
//            .then(function (response) {
//                return $scope.items.push(response.data);
//            })
//    }
//
//    $scope.submitNewItem = function (newItem) {
//        HomeService.postItem(newItem)
//            .then(function (response) {
//                return $scope.items.push(response.data);
//            })
//    }
//
//    $scope.updateItem = function (item, index) {
//        HomeService.putItem(item)
//            .then(function (response) {
//                return $scope.items[index] = response.data;
//            })
//    }
//
//    $scope.deleteItem = function (item, index) {
//        HomeService.deleteItem(item)
//            .then(function () {
//                return $scope.items.splice(index, 1);
//            })
//    }
}])