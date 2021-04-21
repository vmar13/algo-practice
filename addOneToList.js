//You are given a list of integers nums, representing a 
//decimal number and nums[i] is between [0, 9].
//For example, [1, 3, 9] represents the number 139.
//Return the same list in the same representation except modified
// so that 1 is added to the number.

class Solution {
    solve(nums) {
        for (let i = nums.length - 1; i > -1; i--) {
            if (nums[i] == 9) {
                if (i == 0) {
                    nums[i] = 1
                    nums.push(0)
                } else {
                    nums[i] = 0
                }
            } else {
                nums[i] = nums[i] + 1
                break
            }
        }
        return nums
    }
}

//INPUT: nums = [1, 9, 1]
//OUTPUT: nums = [1, 9, 2]