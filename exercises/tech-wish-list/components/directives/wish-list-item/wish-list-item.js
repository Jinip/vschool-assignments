var app = angular.module("app");

app.directive("wishListItem", function(){
    return {
        restrict: "E",
        templateUrl: "components/directives/wish-list-item/wish-list-item.html",
        scope: {
            item: "="
        }
    }
})