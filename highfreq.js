class Solution {
    solve(nums) {
        if(nums.length === 0) return 0
        let freq = {};

        for(let int of nums){
            freq[int] ? freq[int]+=1 : freq[int]= 1;
        }

        // console.log(freq)

        let occur = Object.entries(freq)
        console.log(occur)
        let highest = 0; 
        for(let i = 0; i < occur.length; i++){
            // highest = occur[0][1]
            if(occur[i][1] > highest){
                highest = occur[i][1]
            } 
            // console.log(highest)
        }
        return highest
    }
}