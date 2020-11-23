//Given two arrays, write a function to compute their intersection.

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

const intersect = (nums1, nums2) => {
    let intersection = []

    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] === nums2[j]){
                intersection.push(nums1[i])
                i++
            }
        }
    }

    // for(let num of nums2){
    //     if(nums2[num] === nums1[num]){
    //         intersection.push(nums2[num])
    //     }
    //   }
    // let i = 0
    // let j = 0

    // while(i < nums1.length && j < nums2.length){
    //     if(nums1[i] === nums2[j]){
    //         intersection.push(nums1[i])
    //         i++
    //     } 
    // }
 
    return intersection
}

console.log(intersect(nums1,nums2))

   // let nums1Obj = {}
    // let nums2Obj = {}

    // for(let num of nums1){
    //     nums1Obj[num] = nums1Obj[num] + 1 || 1
    //     // console.log(nums1Obj)
    // }

    // for(let num of nums2){
    //     nums2Obj[num] = nums2Obj[num] + 1 || 1
    //     // console.log(nums2Obj)

    // }

    // for(let key in nums1Obj){
    //     if(nums2Obj[key] === nums1Obj[key]){
    //         intersection.push(key)
    //     }
    // }