//when given an array, loop through the array and increase every element 
//except for one of your choosing, and return the number of loops you need 
//to do in order to make every value equal to each other

// const numLoops = nums => {
//     let min = 0;
//     let max = 0;
//     let i = 0;
//     let loops = 0;

//     for (let i = 0; i < nums.length; i++) {
//         max = Math.max(max, nums[i])
//     }

//     while(nums[i] !== max) {
//         nums[i] += 1
//         i++
//         loops++
        
//         console.log(loops, nums)
//         if(i === nums.length) {
//             i = 0;
//         }
//         numLoops(nums)
//     }
//     return loops
// }

const numLoops = arr => {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let counter = 0
    let i = 0

    while(min !== max){
        if(arr[i] !== max){
            arr[i] = arr[i]+1
            i++
        }else{
            i++
        }
        if(i === arr.length){
            i = 0
    }

    console.log(arr)
    counter++
    max = Math.max(...arr)
    min = Math.min(...arr)
    }

    return Math.ceil(counter/arr.length)
}

console.log(numLoops([2,4,3,5]))