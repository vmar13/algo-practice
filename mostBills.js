
const mostBills = transactions => {

    let txCount = {}
    for(let item of transactions){
        txCount[item] ? txCount[item] += 1 : txCount[item] = 1
    }

    //Convert object into array 
    let descSort = Object.entries(txCount)

    //Sort descending by trans number
    descSort.sort((a, b) => { return b[1] - a[1] })

   
    
}