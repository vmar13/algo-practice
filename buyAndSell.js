//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//Find the maximum profit you can achieve. You may complete as many transactions as you like 
//(i.e., buy one and sell one share of the stock multiple times).
//Note: You may not engage in multiple transactions simultaneously 
//(i.e., you must sell the stock before you buy again).

//Input: prices = [7,1,5,3,6,4]
//Output: 7
//Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

let prices = [7,1,5,3,6,4]
// 7, 1
// 1, 5
// 5, 3
// 3, 6
// 6, 4

const maxProfit = nums => {
    let profit = 0;
    //sell day should be higher than buy day; buy low/sell high
    //i is buy AND j is sell
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            console.log(nums[i],nums[j])
            if (nums[i] < nums[j]) {
                profit += nums[j] - nums[i]
                i++
            } else {
                i++
            }
        }
    }
    return profit
}


// const maxProfit = prices => {
//     let profit = 0; 
    
//     for (let i = 0; i < prices.length - 1; i++) {
//         if(prices[i] < prices[i + 1]) {
//             profit += prices[i + 1] - prices[i]
//         }
//     }
//     return profit
// }

console.log(maxProfit(prices))

