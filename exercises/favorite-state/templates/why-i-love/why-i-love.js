var app = angular.module("app");

app.controller("LoveController", ["$scope", "httpService", function($scope, httpService){
    httpService.get("images/image-urls.json")
        .then(function(response){
            $scope.images = response.love.images;
        })
    $scope.seenMike = false;
    
    function setMikePos(){
        var top = Math.random() * 720;
        var left = Math.random() * 1280;
        console.log(top);
        $(".mike").css({"top": top, "left": left});
        console.log($(".mike"))
    }
}])