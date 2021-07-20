// const coinChange = (coins, amount) => {
//     const table = new Array(amount + 1).fill(Infinity);
//     table[0] = 0;
    
//     for (let coin of coins) {
//         for (let i = 0; i < table.length; i++) {
//             if (coin <= i) {
//                 let idx = i - coin;
//                 let potAmount = table[idx] + 1;
//                 table[i] = Math.min(potAmount, table[i]);
//                 console.log(idx, potAmount, table[i], table)
//             }
//         }
//     }
    
//     // return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
// };

// const coinChange = (coins, amount) => {
//     const table = new Array(amount + 1).fill(Infinity);
//     table[0] = 0;
    
//     for (let coin of coins) {
//     //start frm indx that's equal to denoms bc anything less wouldn't use coin you're calculating for
//         for (let i = coin; i <= amount; i++) {
//             table[i] = Math.min(table[i], table[i - coin] + 1);
//             console.log(table[i])
//         }
//     }
    
//     return table[amount] <= amount ? table[amount] : -1;
// };


const coinChange = (coins, amount) => {
    let table = new Array(amount + 1).fill(0)
    if (coins.length === 0) table[0] = 1;
    table[0] = 1;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            table[i] += table[i - coin]; 
        }
    }

    return table[amount]
}


console.log(coinChange([1,2, 5], 5))








// const prevValues = [];

// function square(n) {
//     if (prevValues[n] != null) return prevValues[n];

//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//     prevValues[n] = result;
//     return result;
// }

// // console.log(square(30000))
// //console.log(prevValues)
// // console.log(square(30000))
// // console.log(square(30000))

// //-----------USING MEMOIZATION WITH RECURSION---------//
// const fib = (n, prevValues = []) => {
//     if (prevValues[n] != null) {
//         return prevValues[n];
//     }
//     let result;
//     if (n <= 2) {
//         result = 1;
//     } else {
//         result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
//     }
//     prevValues[n] = result;
//     return result;
// }

// console.log(fib(5))
