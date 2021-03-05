var containsDuplicate = function(nums) {
    if (nums.length === 0) return false
    let count = {};
    
    for (let ele of nums) {
        count[ele] = count[ele] + 1 || 1
    }
    
    for (let key in count) {
        if(count[key] > 1) {
            return true
        }   
    }
   return false
};