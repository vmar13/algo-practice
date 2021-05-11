//Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

const fibonacci = n => {
  if (n < 3) return 1;

  let prev = 1;
  let curr = 1;

  for (let i = 2; i < n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(fibonacci(3))

//-------RECURSIVE SOLUTION------//

const fib = num => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

//console.log(fib(5)) //Find the 5th num in the fibonacci sequence
//----------------------------CALL STACK----------------------------------------------------------------------------//
//STEP 3: fib(3)       STEP 4: fib(3) = fib(2) + fib(1) = 1 + 1 = 2   //then, this gets popped off the stack
//STEP 2: fib(4)       STEP 5: fib(4) = fib(3) + fib(2) = 2 + 1 = 3   //fib(4) evals to fib(3), which we already know eval'd to 2 PLUS fib(2), which returns 1, so 2 + 1
//STEP 1: fib(5)       STEP 6: fib(5) = fib(4) + fib(3) = 3 + fib(3)  //We have access to the return val of fib(4), which was 3, but not fib(3) bc it got popped off the call stack
//                     STEP 7: fib(3) = fib(2) + fib(1) = 1 + 1 = 2   //We have to re-run fib(3) in order to get the return val for fib(5) to finish running
//                     STEP 8: fib(5) = 3 + 2 = 5                     //We finally have both return vals of fib(4) and fib(3), so we add them up               
//------------------------------------------------------------------------------------------------------------------//


// //solution with memoization
// function fib(n, prevValues = []) {
//   if (prevValues[n] != null) return prevValues[n];
//   let result;
//   if (n <= 2) {
//     result = 1;
//   } else {
//     result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
//   }
//   prevValues[n] = result;
//   return result;
// }

// console.log(fib(40))