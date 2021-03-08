const addDigits = num => {
    let newNum = num.toString()
    let numArr = Array.from(newNum)
    let sum = 0;
    
    for (let int of newNum) {
        sum += parseInt(int);
    }
    
    
    return sum
};