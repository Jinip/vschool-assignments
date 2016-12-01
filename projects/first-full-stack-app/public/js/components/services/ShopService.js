var app = angular.module("app");

app.service("ShopService", ["$http", "FishService", function ($http, FishService) {
    var self = this;

    this.inventoryNav = {
        categories: []
    }
    
    this.inventory = [];
    
    this.getInventory = function () {
        var inventoryNav = {
            categories: []
        }
        
        return FishService.getUniqueFishTypes()
            .then(function (response) {
                inventoryNav.categories.push({
                    name: "Fish",
                    subCategories: response
                })
                return inventoryNav;
            })

//        PlantService.getUniquePlantTypes()
//            .then(function (response) {
//                self.inventory.categories.push({
//                    name: "Live Plants",
//                    subCategories: response.data;
//                })
//                return;
//            })
//        
//        EquipmentService.getUniqueEqipmentTypes()
//            .then(function (response) {
//                self.inventory.categories.push({
//                    name: "Equipment",
//                    subCategories: response.data;
//                })
//                return;
//            })

    }
    
    this.getFeaturedItems = function() {
        return FishService.getAllFishes()
            .then(function(response){
                console.log(response);
                return response;
            })
    }
    this.getSubType = function(type){
        return FishService.getFishesByType(type)
            .then(function(response){
                return response;
            })
    }
    this.getType = function(type){
        switch (type){
            case "Fish":
                return FishService.getAllFishes()
                    .then(function (response){
                        return response;
                    })
                break;
        }
    }
}]);