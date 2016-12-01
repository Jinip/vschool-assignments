//create a function that takes an array of numbers as its first parameter and a single number as its second.

//if there are any two numbers in the array that add up to the second parameter, sum the indices of those two numbers and return the total of all indices which have number pairs which total the second parameter.

//if there are more than one pair of indices with the same number values which add up to the second parameter, account for all cases with those pairs. However, no index can be used in more than one pair, and each instance only adds the sum of its lowest index pair to the grand total of all pairs in the array.

//pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].

//Index    0  1  2   3   4  
//Value    7  9  11  13  15  

//7 + 13 = 20 > Indices 0 + 3 = 3  
//9 + 11 = 20 > Indices 1 + 2 = 3  
//3 + 3 = 6 > Return 6

//pairwise([7, 13, 9, 11, 13, 7]) returns 9.

//Index    0  1   2  3   4   5  
//Value    7  13  9  11  13  7

//7 + 13 = 20 > Indices 0 + 3 = 3
//9 + 11 = 20 > Indicies 1 + 2 = 3
//13 + 7 = 20 > Indicies 4 and 5 (because 13 and 7 have been paired before at lower index values 0 and 3, these will be the indices used in calculation, and this pair must be accounted for, because neither index has been used in a different pair) 0 + 3 = 3
// 3 + 3 + 3 = 9 > Return 9

//pairwise([7, 13, 9, 11, 13]) return 6. 

//Index    0  1   2  3   4  
//Value    7  13  9  11  13

//7 could pair with either the earlier or later 13. However, the sum for that pair must be its lowest possible pair value, 0 and 3, and since 7 cannot be used again for the second 13, that 13 will be ignored.

//7 + 13 = 20 > Indices 0 + 3 = 3  
//9 + 11 = 20 > Indices 1 + 2 = 3  
//3 + 3 = 6 > Return 6

function pairWise(arr, arg) {
    var pairs = [];
    var pairedBefore = false;
    for (var i = 0; i <= arr.length; i++) {
        for (var j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                pairedBefore = false;
                for (var k = 0; k < pairs.length; k++) {
                    var item = pairs[k];
                    if (item.pair.indexOf(arr[i]) !== -1) {
                        pairedBefore = true;
                        if (item.pairedIndices.indexOf(i) === -1 && item.pairedIndices.indexOf(j) === -1) {
                            item.pairTotal += item.lowestPairVal;
                            item.pairedIndices.push(i, j);
                        }
                        break;
                    }
                }
                if (!pairedBefore) {
                    pairs.push({
                        pair: [arr[i], arr[j]],
                        pairedIndices: [i, j],
                        lowestIndices: [i, j],
                        lowestPairVal: i + j,
                        pairTotal: i + j
                    })
                    break;
                }
            }
        }
    }
    var total = 0;
    pairs.forEach(function (item) {
        total += item.pairTotal;
    })
    console.log(pairs);
    return total;
}

console.log("total:", pairWise([7, 10, 10, 9, 11, 7, 12, 8, 5, 13, 13, 7, 13, 15, 10, 10, 7, 13, 15], 20));