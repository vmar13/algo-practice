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


//USING BINARY SEARCH TO ACHIEVE O LOG(N)

class Solution {
    solve(nums) {

        let start = 0
        let end = nums.length - 1
        let min = -1
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] === mid) {
                min = mid
                end = mid - 1
            } else if (nums[mid] < mid) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }

        return min

    }
}