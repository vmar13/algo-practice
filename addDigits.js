const addDigits = num => {
    let newNum = num.toString()
    let sum = 0;
    
    for (let int of newNum) {
        sum += parseInt(int);
    }
    
    if (sum > 9) {
        return addDigits(sum)
    }
    return sum
};