function groupTransaction(transactions){
    // --- Create store {item: quantity} -----
    let txCount = {};
    for(let item of transactions){
        txCount[item] = (txCount[item]+1) || 1
    }
    // --- Create Array with store info [[belt,1], [jeans,2]]----
   let sortable = []
   for(var item in txCount){
       sortable.push([item, txCount[item]])
   }
    // --- Sort the array [[jean,2], [belt,1]]
   sortable.sort(function(a,b){
       return b[1] - a[1]
   })
    // --- Join the elemnts ['jean 2', 'belt 1']
    let result = sortable.map( item => item.join(' '))
    return result
}
let stdin = ['purse', 'purse', 'belt', 'jeans', 'jeans']
console.log(groupTransaction(stdin))