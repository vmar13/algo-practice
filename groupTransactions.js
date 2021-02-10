//For a given array of transactions, group all of the transactions by item name. 
//Return an array of strings where each string contains the item name followed by 
//a space and the number of associated transactions.
//Sort the array descending by transaction count, then ascending alphabetically 
//by item name for items with matching transaction counts.
// Example:
// transactions = ['purse', 'purse', 'belt', 'jeans', 'jeans']
//There are 2 items with 2 transactions each: 'purse' and 'jeans'. //In alphabetical order, they are 'jeans', 'purse'.
//There is 1 item with 1 transaction: 'belt'.
//The return array, sorted as required, is:
// ['jeans 2', 'purse 2', 'belt 1']


const groupTransactions = transactions => {

    let txCount = {}
    //Count the number of trans for each item and put in obj (freq counter)
    for(let item of transactions){
        txCount[item] ? txCount[item] += 1 : txCount[item] = 1
    }

    //Convert object into array 
    let descSort = Object.entries(txCount)

    //Sort descending by trans number
    descSort.sort((a, b) => { return b[1] - a[1] })

    //Sort ascending alphabetically ONLY for item names with matching trans number
    let alphaSort = descSort.sort((a, b) => {
        if(a[1] === b[1]){

            let x = a[0]
            let y = b[0]

            return x < y ? -1 : x > y ? 1 : 0
        }
        return a[0] - b[0]
    })
    
    //Convert each array element to single string and replace comma with space  
    let finalArr = alphaSort.map(subArr => subArr.toString('').replace(',', ' '))
    return finalArr
}


console.log(groupTransactions(['purse', 'purse', 'belt', 'jeans', 'jeans']))
