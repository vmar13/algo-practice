//Revisiting the Basics - Common uses for spread operator 

let friends = ['Danetsy', 'Ben', 'Tony', 'Paquito']
let newFriends = [...friends] //making a copy of an array
let bothFriends = [...friends, ...newFriends] //concatenating two arrays without mutating originals
// console.log(bothFriends)

let nums = [23, 46, 65, 89]
// console.log(Math.max(...nums)) //passing arguments to Math obj methods
let max = Math.max(...nums) // get the max value of an array
// console.log(max)

// console.log(...nums) // console logging an array like a string
// 23 46 65 89