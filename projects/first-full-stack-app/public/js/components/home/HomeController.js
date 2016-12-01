var app = angular.module("app");

app.controller("HomeController", ["$scope", "GuideService", function($scope, GuideService){
    $scope.service = GuideService;
    
    GuideService.getAllGuides();
    
    $scope.addComment = function(guide, newComment, index){
        GuideService.addComment(guide, newComment, index);
    }
    
    $scope.addReply = function(guide, comment, newReply, index){
        GuideService.addReply(guide, comment, newReply, index);
    }
    
    $scope.updateGuide = function(guide, index){
        GuideService.updateGuide(guide, index);
    }
    
    $scope.deleteComment = function(guide, commentIndex, index){
        GuideService.deleteComment(guide, commentIndex, index);
    }
    
    $scope.deleteReply = function(guide, commentIndex, replyIndex, index){
        GuideService.deleteReply(guide, commentIndex, replyIndex, index);
    }
}])