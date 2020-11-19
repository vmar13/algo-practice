//Given a non-empty array of integers nums, every element appears twice except for one.
//Find that single one.

let nums = [2,2,1]

const singleNum = nums => {
    let counterObj = {}
    
    for(let num of nums){
        counterObj[num] = counterObj[num] + 1 || 1
       
    }   
}

console.log(singleNum(nums))