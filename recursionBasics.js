//Write a non-recursive function that counts down from a given number n all the 
//way down to 0. 

const coundown = n => {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

console.log(coundown(10))