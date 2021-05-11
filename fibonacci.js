const fibonacci = num => {
    let a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

//recursive solution

const fib1 = num => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib1(4))
// 1, 1, 2, 3

//solution with memoization
function fib(n, prevValues = []) {
  if (prevValues[n] != null) return prevValues[n];
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
}

console.log(fib(40))