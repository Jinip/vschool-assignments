var app = angular.module("app");

app.service("IssueService", ["$http", function ($http) {
    var self = this;
    var url = "/issues/";
    this.issues = [];

    this.getIssues = function () {
        $http.get(url)
            .then(function (response) {
                self.issues = response.data;
            })
            .then(function(){
                self.sortIssues();
            })
    }

    this.postIssue = function (issue) {
        $http.post(url, issue)
            .then(function () {
                self.getIssues();
            })
    }

    this.putIssue = function (issue) {
        $http.put(url + issue.id, issue)
            .then(function () {
                self.getIssues();
            })
    }

    this.deleteIssue = function (issue) {
        $http.delete(url + issue.id)
            .then(function () {
                self.getIssues();
            })
    }

    this.sortIssues = function () {
        self.issues.sort(function (a, b) {
            var totalVotesA = a.votes.upvotes - a.votes.downvotes;
            var totalVotesB = b.votes.upvotes - b.votes.downvotes;

            if (totalVotesA > totalVotesB) {
                return -1;
            } else if (totalVotesA < totalVotesB) {
                return 1;
            } else {
                return 0;
            }

        })
    }
}])