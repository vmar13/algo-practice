//Given two integer arrays nums1 and nums2, 
//return an array of their intersection. 
//Each element in the result must be unique and you may return
// the result in any order.

const intersection = (nums1, nums2) => {
    let uniq = new Set();
    let longest = nums1.length > nums2.length ? nums1 : nums2
    let shortest = nums1.length < nums2.length ? nums1 : nums2
    
    
}