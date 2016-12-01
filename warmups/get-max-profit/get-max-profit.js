//given access to stock prices yesterday, determine what would have been the greatest profit. Array indicies indicate price at a given time.

function getMaxProfit(arr) {
    var trade = {
        buyTime: 0,
        sellTime: 0,
        profit: 0
    };
    var currentProfit = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            currentProfit = arr[j] - arr[i];
            if (currentProfit > trade.profit) {
                trade.buyTime = i;
                trade.sellTime = j;
                trade.profit = currentProfit;
            }
        }
    }
    
    console.log("Buy time: " + trade.buyTime + " for " + arr[trade.buyTime]);
    console.log("Sell time: " + trade.sellTime + " for " + arr[trade.sellTime]);
    return trade.profit;
}

console.log(getMaxProfit([1, 6, 13, 7, 6, 5, 2, 11, 9]));