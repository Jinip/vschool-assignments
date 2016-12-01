var app = angular.module("app");

app.service("FishService", ["$http", function ($http) {
    var self = this;
    var url = "/fishes/";
    
    this.getAllFishes = function () {
        return $http.get(url)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
    }
    
    this.getUniqueFishTypes = function() {
        return $http.get(url + "/types/")
            .then(function(response){
                return response.data;
            })
    }
    
    this.getFishesByType = function(type){
        return $http.get(url + "?type=" + type)
            .then(function (response){
                console.log(response.data);
                return response.data;
            })
    }

    this.post = function (item) {
        $http.post(url, item)
            .then(function (response) {
                self.fishes.push(response.data);
                return;
            })
    }

    this.put = function (item) {
        $http.put(url + item._id, item)
            .then(function (response) {
                self.fishes.forEach(function (arrItem, index) {
                    if (arrItem._id === item._id) {
                        self.fishes[index] = response.data;
                        return;
                    }
                })
            })
    }

    this.delete = function (item) {
        $http.delete(url + item._id)
            .then(function(response){
                self.fishes.forEach(function(arrItem, index){
                    if (arrItem._id === item._id){
                        self.fishes.splice(index, 1);
                        return;
                    }
                })
            })
    }
}])