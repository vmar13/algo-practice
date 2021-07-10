//Given a list of integers nums, return whether you can rearrange the order of nums 
//such that the difference between every consecutive two numbers is the same.

const arithSeqPerm = nums => {
    nums.sort(); // [1,3,5,7]
    let diff = nums[1] - nums[0]; // 2
    
    for (i = 1; i < nums.length; i++) {  //2nd ele minus previous ele & compare to diff
        if (nums[i] - nums[i - 1] !== diff) {
            return false;
        }
    }
    return true;
}

console.log(arithSeqPerm([7, 1, 5, 3]))

// 3 - 1   nums[i] = 3
//5 - 3    nums[i] = 5
//7 - 5    nums[i] = 7
//true