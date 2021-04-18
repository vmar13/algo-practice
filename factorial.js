//*** RECURSIVE SOLUTION ***/

const recFactorial = num => {
    if (num === 1) return 1;
    return num *= recFactorial(num - 1);
}

//*** BASIC ITERATIVE SOLUTION ***/
const factorial = num => {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

// console.log(factorial(4))
console.log(recFactorial(3))