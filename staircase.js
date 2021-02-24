//This is a staircase of size :

//#
//##
//###
//####
//Its base and height are both equal to n. It is drawn using
// # symbols and spaces. The last line is not preceded by any spaces.

//Write a program that prints a staircase of size n.

const staircase = n => {
    //loop for the number of steps, n
    for (let i = 0; i < n; i++) {
        //create blank string and create new string each time we loop
        let str = '';
        // console.log(str)
        for (let j = 0; j < n - i - 1; j++) {
            //this loop adds one space to the string each time
            str += ' ';
        }
        
        console.log(str)
    }
    
}

console.log(staircase(6))