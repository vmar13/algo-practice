//Given a string s, return its run-length encoding. 
//You can assume the string to be encoded have no digits 
//and consists solely of alphabetic characters.

const solve = s => {
        let count = 1;
        let str = '';

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== s[i + 1]) {
                str += `${count}${s[i]}`
                count = 1
            } else {
                count++
            }
        }
        
       return str
    }

    s = "aaaabbbccdaa"

    //"4a3b2c1d2a"

    console.log(solve(s))
