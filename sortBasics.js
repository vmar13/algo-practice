const names = ["Vanessa", "David", "Jeff", "Patti", "Jose", "Albizu"]

const compareByLen = (str1, str2) => {
    return str1.length - str2.length
}

// console.log(names.sort(compareByLen))

const numeros = [3, 56, 67, 4, 5, 23, 900]

const numCompare = (num1, num2) => {
    // return num1 - num2
    return num2 - num1 

}

console.log(numeros.sort(numCompare))