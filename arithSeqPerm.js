//Given a list of integers nums, return whether you can rearrange the order of nums 
//such that the difference between every consecutive two numbers is the same.

const arithSeqPerm = nums => {
   nums.sort();
   let diff = nums[1] - nums[0]; 
   
   for (let i = 1; i < nums.length; i++) {
        if ((nums[i] - nums[i - 1]) !== diff) {
            return false
        }
   }

   return true
}

console.log(arithSeqPerm([7, 1, 5, 3]))

// 3 - 1   nums[i] = 3
//5 - 3    nums[i] = 5
//7 - 5    nums[i] = 7
//true
