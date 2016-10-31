var app = angular.module("app", []);

app.controller("main", ["$scope", function($scope){
    $scope.uglyThings = []
    
    $scope.postUgly = function(){
        var thing = {
            title: $scope.title,
            url: $scope.url,
            desc: $scope.desc
        }
        $scope.uglyThings.push(thing);
    }
    
    $scope.deletePost = function(item){
        console.log(item);
        var index = $scope.uglyThings.indexOf(item);
        console.log(index);
        $scope.uglyThings.splice(index, 1);
    }
    
}])
