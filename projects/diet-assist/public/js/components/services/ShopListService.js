var app = angular.module("app");

app.service("ShopListService", ["$location", function($location){
    var self = this;
    
    this.shoppingList = [];
    
    this.generateShoppingList = function(mealPlan){
        var allMeals = [].concat(mealPlan.breakfast).concat(mealPlan.lunch).concat(mealPlan.dinner);
        
        var totalInventory = [];
        var newShoppingList = {};
        
        var found = false;
        allMeals.forEach(function(meal){
            meal.ingredients.forEach(function(ingredient){
                ingredient.name.replace("_", " ");
                totalInventory.forEach(function(item){
                    if (item.name === ingredient.name){
                        found = true;
                        return item.quantity += ingredient.quantity;
                    }
                })
                if (!found) {                    
                    totalInventory.push(ingredient);
                }
                found = false;
            })
        })
        
//        totalInventory.forEach(function(ingredient){
//            if (newShoppingList.hasOwnProperty[ingredient.category]){
//                newShoppingList[ingredient.category].push(ingredient);
//            } else {
//                newShoppingList[ingredient.category] = [ingredient];
//            }
//        })
        
        self.shoppingList = totalInventory; //newShoppingList;
        $location.path("/shopping-list/");
    }
}])