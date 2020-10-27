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
    let txCount = {};
    //Count the number of trans for each item and put in obj (freq counter)
    for(let item of transactions){
        txCount[item] ? txCount[item] += 1 : txCount[item] = 1
    }

    //Convert into array and sort descending my trans # and then asc alpha
    let descSort = Object.entries(txCount)
    
    for(let i = 0; i < descSort.length; i++){
        let highest = i 
        for(let j = i + 1; j < descSort.length; j++){
            if(descSort[j] > descSort[highest]) highest = j   
        }
            if(i !== highest){
                let temp = descSort[i]
                descSort[i] = descSort[highest]
                descSort[highest] = temp
            }
    }

    let newArr = descSort.sort((a,b) => {
        if(a[1] === b[1]) return a[0] - b[0]
    }) 

    // let strArr = descSort.map(ele => ele.toString('').replace(',', ' '))
return newArr 
     

    
    // newArr.sort((a,b) => {
    //     return a.length - b.length
    // })
    // let newArr = descSort.map(ele => ele[1] === descSort[i])


    // for(let i = 0; i < descSort.length; i++){
    //     for(let j = 1; j < descSort.length; j++){
    //          if(descSort.map(ele => ele[1] === descSort[i])) 
    //     }
    // }
}


console.log(groupTransactions(['purse', 'purse', 'belt', 'jeans', 'jeans']))
