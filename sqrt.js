var mySqrt = function(x) {
    
    let half = Math.floor(x / 2); // 8 / 2 = 4
    let start = 1;
    let end = x;
    
    while(start <= end) {
        if(half * half === x) return half;
        
       if (half * half > x) {  // 4 * 4 = 16, so 16 > 8
            end = half - 1  // end = 3
            half = Math.floor((start + end) / 2)
        } else {
            start = half + 1  // 3
            half = Math.floor((start + end) / 2)
        }
    }
    return half
};