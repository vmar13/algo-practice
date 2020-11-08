let nums = [3,2,2,3]

var removeElement = function(nums, val) {
    if(nums.length === 0) return 0
    
    nums = nums.filter(num => num !== val)
    return nums.length
}

console.log(removeElement(nums, 3))