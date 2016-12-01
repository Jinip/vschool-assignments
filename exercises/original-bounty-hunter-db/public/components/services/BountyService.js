var app = angular.module("app");

app.service("BountyService", ["$http", function($http){
    var url = "http://localhost:8000/bounties/";
    
    var self = this;
    
    this.bountyList;
    
    this.getBounties = function(){
        $http.get(url)
            .then(function(response){
                self.bountyList = response.data;
                console.log(response.data);
            })
    }
    
    this.postBounty = function(bounty){
        return $http.post(url, bounty)
            .then(function(response){
                self.getBounties();
            })
    }
    
    this.putBounty = function(bounty){
        $http.put(url + bounty._id, bounty)
            .then(function(response){
                self.getBounties();
            })
    }
    
    this.deleteBounty = function(bounty){
        $http.delete(url + bounty._id)
            .then(function(response){
                self.getBounties();
            })
    }
}])