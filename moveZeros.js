class Solution {
    solve(nums) {
        let counter = 0
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                nums[counter] = nums[i]
                counter += 1
            }
        }
        for(counter; counter < nums.length; counter++){
            nums[counter] = 0
        }
        return nums
    }  

}