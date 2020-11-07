function removeDuplicates(nums) {
    nums = nums.filter((int, index) => nums.indexOf(int) === index)
    return nums.length
}