function sockMerchant(n, ar) {
    let count = {};
    let total = 0; 

    for (let num of ar){
        count[num] ? count[num]+= 1 : count[num] = 1;
    }


    for (let val in count) {
        if(count[val] % 2 === 0) {
            total += (count[val] / 2)
            // finalTotal = Math.floor((total += count[val]))
            // console.log(total)
        } else if (count[val] % 2 === 1) total += Math.floor(count[val]/2)
    }
       
    return total 

    }


console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]))