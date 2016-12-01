var app = angular.module("app");

app.controller("MainController", ["$scope", "IssueService", function($scope, IssueService){
    $scope.service = IssueService;
    $scope.update;
    $scope.editing;
    
    IssueService.getIssues();
    
    $scope.createNewIssue = function(issue){
        IssueService.postIssue(issue);
        $scope.newIssue = {};
    }
    
    $scope.vote = function(issue, upOrDown, index){
        clearTimeout($scope.update);
        
        if (upOrDown === "up"){
            $scope.service.issues[index].votes.upvotes++;
        } else {
            $scope.service.issues[index].votes.downvotes++;
        }
        
        $scope.update = setTimeout(function(){
            IssueService.putIssue(issue);
        }, 500);
    }
    
    $scope.updateIssue = function(issue){
        IssueService.putIssue(issue);
    }
    
    $scope.deleteIssue = function(issue){
        IssueService.deleteIssue(issue);
    }
    
}])