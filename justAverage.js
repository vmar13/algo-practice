//Given a list of integers nums and an integer k, return true if 
//you can remove exactly one element from the list to make the average equal to exactly k.

const justAvg = (nums, k) => {
    let reduced = nums.reduce((acc, currVal) => acc + currVal)
    for (let i = 0; i < nums.length; i++) {
        if ((reduced - nums[i])/(nums.length - 1) === k) {
            return true
        }
}
return false
}

let nums = [1, 2, 3, 10]
let k = 2

console.log(justAvg(nums, k))