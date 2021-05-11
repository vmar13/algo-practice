//Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

const fib = n => {
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

console.log(fib(3))

// //recursive solution

const fib1 = num => {
  if (num <= 2) return 1;
  return fib1(num - 1) + fib1(num - 2);
}

//console.log(fib1(5)) //Find the 5th num in the fibonacci sequence
// //fib1(5 - 1) + fib1(5 - 2) // 4 + 3
// //fib1(4 - 1) + fib1(4 - 2) // 3 + 2
// //fib1(3 - 1) + 1          // 2 + 1 = 3
// //1 + 1 = 2, so 3 + 2 = 5

//fib1(2) // 1
// //returns 1

//fib1(3) // 2
// fib1(3 - 1) + fib1(3 - 2)  // 2 + 1
// 1 + 1 = 2

//fib1(4) // 3
// fib1(4 - 1) + fib1(4 - 2) // 3 + 2
// fib1(3 - 1) + 1           // 2 + 1 = 3


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