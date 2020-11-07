// function removeDuplicates(nums) {
//     nums = nums.filter((int, index) => nums.indexOf(int) === index)
//     return nums.length
// }

function removeDuplicates(nums) {
    let i = 0
    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}