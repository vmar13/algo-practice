function sockMerchant(n, ar) {
    let count = {};
    let total = 0; 

    for (let num of ar){
        count[num] ? count[num]+= 1 : count[num] = 1;
    }
    // return count 
    
    // for (let val in count){
    //     count[val] % 2 ? total += count[val] : null 
    // } 
    // return total 

    for (let val in count) {
        if(count[val] % 2 !== 0) {
            console.log(count[val])
        }
    }
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))