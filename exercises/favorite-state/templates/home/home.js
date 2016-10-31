var app = angular.module("app");

app.controller("HomeController", ["$scope", "httpService", function($scope, httpService){
    httpService.get("images/image-urls.json")
        .then(function(response){
            $scope.stateFlag = response.home.images[0].url;
        })
    $scope.seenMike = false;
    
    setMikePos();
    
    function setMikePos(){
        var top = Math.random() * 720;
        var left = Math.random() * 1280;
        $(".mike").css({"top": top, "left": left});
    }
}])