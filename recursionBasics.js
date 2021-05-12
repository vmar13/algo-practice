//********PROBLEM #1 ******************//
//Write a non-recursive function that counts down from a given number n all the 
//way down to 0. 

//-------NON-RECURSIVE SOLUTION-------//
const coundown = n => {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

// console.log(coundown(10))

//-------RECURSIVE SOLUTION--------//
const countdownRec = n => {
    if (n <= 0) return n;
    console.log(n)
    return countdownRec(n - 1);
}

// console.log(countdownRec(10))



//********PROBLEM #2 ******************//

//Write a non-recursive function that sums all numbers from itself down to 1

//-------NON-RECURSIVE SOLUTION-------//
const sumRange = n => {
    let count = 0;
    for (let i = n; i > 0; i--) {
        count += i;
    }
    return count;
}

// console.log(sumRange(3))

//-------RECURSIVE SOLUTION #1--------//
const sumRangeRec = n => {
    if (n <= 0) return n;
    return n + sumRangeRec(n - 1)
}

// console.log(sumRangeRec(3))

// 3 + sumRangeRec(2)
//      2 + sumRangeRec(1)
//          1

//-------RECURSIVE SOLUTION #2--------//
const sumRangeRecursion = (n, total = 0) => {      //Since we're inside of a recursive func, any variable that
    if (n <= 0) return total;                      //we set in this func is only available to that 
    return sumRangeRecursion(n - 1, total + n);    //one single version of the recursive func--not to all of them,
}                                                  //which is why we need to pass the total value to all recursive funcs
                                                   //and by default, the first time we call the func, we want total to be 0
//sumRangeRec(2, 3)
        //sumRangeRec(1, 5)
                //sumRangeRec(0, 6)
                    //return 6

console.log(sumRangeRecursion(3))    //Will default total to 0, even tho we don't pass it in