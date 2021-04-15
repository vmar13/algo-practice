let divisor = 2;
let number = 202355375;

const divNum = (div, num) => {
    while(num > 1){
        if(num % div === 0){
            num /= div
            // console.log(num)

        } else {
            div++
        }
    }
    return num
}


console.log(divNum(divisor, number))