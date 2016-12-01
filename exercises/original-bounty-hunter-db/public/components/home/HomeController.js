var app = angular.module("app");

app.controller("HomeController", ["$scope", "BountyService", function($scope, BountyService){
    $scope.service = BountyService;
    
    BountyService.getBounties();
    
    $scope.submitBounty = function(bounty){
        BountyService.postBounty(bounty)
            .then(function(){
                $scope.newBounty = {};
            })
    }
    
    $scope.updateBounty = function(bounty){
        console.log(bounty);
        BountyService.putBounty(bounty);
    }
    
    $scope.deleteBounty = function(bounty){
        BountyService.deleteBounty(bounty);
    }
}])