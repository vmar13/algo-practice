//Given a list of integers nums, find the most frequently occurring element 
//and return the number of occurrences of that element.

const highFreq = nums => {
    if(nums.length === 0) return 0;

    let freq = {};
    let max = 0;

    for(let num of nums) {
        freq[num] ? freq[num]+= 1 : freq[num] = 1;
    }
    // return freq
    //{1: 5, 4: 1, 7: 2}

   for(let num in freq) {
        max = Math.max(max, freq[num])
   }
   return max
}

console.log(highFreq([1, 4, 1, 7, 1, 7, 1, 1]))
//5

// class Solution {
//     solve(nums) {
//         if(nums.length === 0) return 0
//         let freq = {};

//         for(let int of nums){
//             freq[int] ? freq[int]+=1 : freq[int]= 1;
//         }

//         // console.log(freq)

//         let occur = Object.entries(freq)
//         console.log(occur)
//         let highest = 0; 
//         for(let i = 0; i < occur.length; i++){
//             // highest = occur[0][1]
//             if(occur[i][1] > highest){
//                 highest = occur[i][1]
//             } 
//             // console.log(highest)
//         }
//         return highest
//     }
// }

