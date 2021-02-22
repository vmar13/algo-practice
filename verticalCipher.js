class Solution {
    solve(s, k) {
       let arr = []
       for (let i = 0; i < s.length; i++) {
           if (i < k) arr.push(s[i])
           else arr[i % k] += s[i]
          
       }
       return arr
   }
}