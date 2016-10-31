Array.prototype.myFilter = function(callback){  
  var array = this;
    var newArray = [];
    array.forEach(function(item){
        if (callback(item)){
            newArray.push(item);
        }
    })
    return newArray;
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers =  numericArray.myFilter(function(item){  
  return item > 3;
});

var alphaArray = ["a", "b", "f", "c", "b", "f"];

var noFs = alphaArray.myFilter(function(item){
    return item !== "f";
})

console.log(noLargeNumbers);
console.log(noFs);