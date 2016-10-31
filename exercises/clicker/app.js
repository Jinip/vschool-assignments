var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/red", {
        templateUrl: "templates/red.html",
        controller: "RedController"
    }).when("/blue", {
        templateUrl: "templates/blue.html",
        controller: "BlueController"
    }).otherwise("/red", {
        templateUrl: "templates/red.html",
        controller: "RedController"
    })
})

app.service("redService", function(){
    this.count = 100;
    this.increment = function(){
        this.count++;
        return this.count;
    };
    this.decrement = function(){
        this.count--;
        if (this.count === 0) this.reset();
    }
    this.reset = function(){
        this.count = 100;
    }
})

app.service("blueService", function(){
    this.count = 100;
    this.increment = function(){
        this.count++;
    };
    this.decrement = function(){
        this.count--;
        if (this.count === 0) this.reset();
    }
    this.reset = function(){
        this.count = 100;
    }
})

app.controller("RedController", ["$scope", "redService", "blueService", function($scope, redService, blueService){
    $scope.service = redService;
    $scope.click = function(){
        redService.increment();
        blueService.decrement();
    }
}])

app.controller("BlueController", ["$scope", "blueService", "redService", function($scope, blueService, redService){
    $scope.service = blueService;
    $scope.click = function(){
        blueService.increment();
        redService.decrement();
    }
}])