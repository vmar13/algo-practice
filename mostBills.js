
const mostBills = transactions => {

    let txCount = {}
    for(let item of transactions){
        txCount[item] ? txCount[item] += 1 : txCount[item] = 1
    }

   
    
}