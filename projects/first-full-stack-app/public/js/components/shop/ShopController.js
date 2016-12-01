var app = angular.module("app");

app.controller("ShopController", ["$scope", "ShopService", "$routeParams", function ($scope, ShopService, $routeParams) {

    $scope.display = [];

    $scope.detailView = {};

    $scope.showDetail = false;

    $scope.inventoryNav = [];

    //    ShopService.getFeatured()
    //        .then(function(response){
    //            $scope.display = response;
    //            return;
    //        })

    ShopService.getInventory()
        .then(function (response) {
            console.log(response);
            $scope.inventoryNav = response;
        })

    if (Object.keys($routeParams).length !== 0) {
        if ($routeParams.subCategory) {
            ShopService.getSubType($routeParams.subCategory)
                .then(function (response) {
                    $scope.display = response;
                })
        } else {
            ShopService.getType($routeParams.category)
                .then(function (response) {
                    $scope.display = response;
                })
        }

    } else {
        ShopService.getFeaturedItems()
            .then(function (response) {
                console.log(response);
                $scope.display = response;
            })
    }

    $scope.updateDisplay = function (type) {
        ShopService.getType(type)
            .then(function (response) {
                $scope.display = response;
                return;
            })
    }

    $scope.showDetailView = function (item) {
        ShopService.getItem(item)
            .then(function (response) {
                $scope.detailView = response;
                $scope.showDetail = true;
            })
    }
}])