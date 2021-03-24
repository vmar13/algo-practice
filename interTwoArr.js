//Given two integer arrays nums1 and nums2, 
//return an array of their intersection. 
//Each element in the result must be unique and you may return
// the result in any order.

const intersection = (nums1, nums2) => {
    let uniq = new Set();
    let longest = nums1.length > nums2.length ? nums1 : nums2
    let shortest = nums1.length < nums2.length ? nums1 : nums2
    
    for (let i = 0; i < shortest.length; i++) {
        if (longest.includes(shortest[i])) {
            uniq.add(shortest[i])
        }
    }
    
    return Array.from(uniq);
}

//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2]

//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [9,4]
//Explanation: [4,9] is also accepted.