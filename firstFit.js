const firstFit = (rooms, target) => {
    for (let num of rooms) {
        if (num >= target) {
            return num
        } 
    }
return -1
}

console.log(firstFit([15, 10, 30, 50, 25], 20))