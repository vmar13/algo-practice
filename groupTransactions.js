function groupTransactions(transactions) {
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

    let newArr = descSort.map(ele => ele.toString('').replace(',', ' ')).sort()
    return newArr
}

console.log(groupTransactions(['bin', 'can', 'can', 'can']))
