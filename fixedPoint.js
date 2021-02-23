//Given a list of unique integers nums sorted in ascending order, 
//return the minimum i such that nums[i] == i. If there's no solution, return -1.
//This should be done in O(log(n)) time.

const fixedPoint = nums => {

}

console.log(fixedPoint([-5, -2, 0, 3, 4]))


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