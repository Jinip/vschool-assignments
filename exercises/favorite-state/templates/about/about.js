var app = angular.module("app");

app.controller("AboutController", ["$scope", "httpService", "$sce", "$timeout", function($scope, httpService, $sce, $timeout){
    httpService.getWiki("https://en.wikipedia.org/wiki/South_Carolina")
        .then(function(response){
            $scope.about = $sce.trustAsHtml(response);
        }).then(function(){
            $timeout(function(){
                angular.element(document).find("p a").removeAttr("href");
                angular.element(document).find("sup").detach();
            }, 0, false);
        })
    $scope.seenMike = false;
    
    setMikePos();
    
    function setMikePos(){
        var top = Math.random() * 720;
        var left = Math.random() * 1280;
        $(".mike").css({"top": top, "left": left});
    }
    
}])