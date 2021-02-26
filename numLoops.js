//when given an array, loop through the array and increase every element 
//except for one of your choosing, and return the number of loops you need 
//to do in order to make every value equal to each other

const numLoops = nums => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
    }
    return max 
}

console.log(numLoops([2,4,3,5]))