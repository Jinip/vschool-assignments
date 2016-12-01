var app = angular.module("app");

app.controller("GuidesController", ["$scope", "GuidesService", "$routeParams", function ($scope, GuidesService, $routeParams) {
    $scope.guidesNav = [];

    $scope.guides = [];
    
    $scope.landing;
    
    $scope.display;

    //    GuidesService.getGuidesNav()
    //        .then(function(response){
    //            $scope.guidesNav = response;
    //        })

    GuidesService.getAllGuides()
        .then(function (response) {
            $scope.guides = response;
            return response;
        })
        .then(function (response) {
            response.forEach(function (guide) {
                $scope.guidesNav.push({
                    _id: guide._id,
                    title: guide.title,
                    url: guide.url
                })
            })
        })
        .then(function () {
            if (Object.keys($routeParams).length !== 0) {
                $scope.guides.forEach(function (guide) {
                    if ($routeParams.guideUrl === guide.url) {
                        $scope.display = guide;
                        return;
                    }
                })
            } else {
                $scope.display = $scope.guides[0];
            }
        })


    $scope.updateDisplay = function (guideId) {
        $scope.guides.forEach(function (guide) {
            if (guide._id === guideId) {
                $scope.display = guide;
                return;
            }
        })
    }

    $scope.nextGuide = function (index) {

    }
}])