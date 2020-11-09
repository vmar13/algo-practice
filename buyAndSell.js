let prices = [7,1,5,3,6,4]

const maxProfit = prices => {
    let buy = prices[prices.length * Math.random() | 0]
    let sell = prices[prices.length * Math.random() | 0]
    let profit; 

    if(buy < sell){
       profit  = sell - buy 
    } 
    return profit
}

console.log(maxProfit(prices))