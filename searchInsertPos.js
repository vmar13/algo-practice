const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1
    
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            end = mid - 1
        } else if (nums[mid] < target) {
            start = mid + 1
        }
    }
    
    return target > nums[start] ? start + 1 : start
    
};

console.log(searchInsert([1, 3, 5, 6], 5))

//output: 2