//Given two arrays, write a function to compute their intersection.
//----for UNIQUE values only below----//

let nums1 = [1,2,2,1]
let nums2 = [2,2]

const intersect = (nums1, nums2) => {
    let firstSet = new Set();
    let arrIntersx = new Set();
     
    for (let num of nums1) {
        firstSet.add(num);
    }

    for (let num of nums2) {
        firstSet.has(num) ? arrIntersx.add(num) : null;
    }

    return Array.from(arrIntersx)
}

console.log(intersect(nums1,nums2))

//----for ALL, REPEATING values below----//
//Each element in the result should appear as many times as it shows in both arrays.
//The result can be in any order.

// let nums1 = [1,2,2,1]
// let nums2 = [2,2]

// const intersect = (nums1, nums2) => {
//     let results = []
//     for (let i = 0; i < nums2.length; i++){
//         if (nums1.includes(nums2[i])){
//             results.push(nums2[i])
//             // console.log(nums2)
//             nums1.splice(nums1.indexOf(nums2[i]), 1)
//             // console.log(nums1)
//         }
//     }
//     return results
// }

