//Given a non-empty array of integers nums, every element appears twice except for one.
//Find that single one.

let numbers = [2,2,1,1,4,5,5]

const singleNum = nums => {
    let counterObj = {}
    
    for(let num of nums){
        counterObj[num] = counterObj[num] + 1 || 1
        // if(counterObj[num] === 1){
        //     return counterObj[num]
        // } 
    }   
    
    for(let num in counterObj){
        if(counterObj[num] === 1){
            return num
        }
    }
}

console.log(singleNum(numbers))