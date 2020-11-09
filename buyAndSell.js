let prices = [10,6,3,5,7,4]

const maxProfit = prices => {
    let profit = 0

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
}

console.log(maxProfit(prices))