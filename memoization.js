const prevValues = [];

function square(n) {
    if (prevValues[n] != null) return prevValues[n];

    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }
    prevValues[n] = result;
    return result;
}

console.log(square(30000))
// console.log(prevValues)
console.log(square(30000))
console.log(square(30000))