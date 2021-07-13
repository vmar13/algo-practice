//Count the number of prime numbers less than a non-negative number, n.
//Input: n = 10
//Output: 4
//Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

const countPrimes = n => {
    let nums = [];
    let primeCount = 0;
    
    // Make every element in nums array true.   [true, true, true, true, true]
    for (let i = 0; i < n; i++) {
        nums[i] = true;
    }
    
    // Start loop at number 2 and eliminate all of its multiples.
    // Execute until i * i is no longer less than n.
    // So for input 10, you would only check multiples of 2 & 3 bc 3 * 3 = 9,
    // which is the last index in the array
    // [T, T, T, T, T, T, T, T, T, T]
    //  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
     
    for (let i = 2; i * i < n; i++) {
        if (nums[i] === true) {                  //Check if number you're on has already been turned to false
    //Check mults of 2 and then 3
            for (let j = 2; j * i < n; j++)
                nums[j * i] = false;             
        }
    }

    for (let i = 2; i < n; i++) {
        if (nums[i] === true) {
            primeCount++;
        }
    }

    return primeCount;
};