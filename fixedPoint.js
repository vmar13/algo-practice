class Solution {
    solve(nums) {
  
        if (nums.length === 0) return -1        

        for(let i = 0; i < nums.length; i++){
            if(i === nums[i]){
                return nums[i]
            } 
        }
        return -1
    }
}