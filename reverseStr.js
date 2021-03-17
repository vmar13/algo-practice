//Write a function that reverses a string. 
//The input string is given as an array of characters s.

const reverseString = s => {
    let end = s.length - 1
    
    for (let i = 0; i < end; i++) {
        let temp = s[i]
        s[i] = s[end]
        s[end] = temp 
        end--
    }
}

//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]