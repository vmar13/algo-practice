const noisyPalindrome = s => {
    // s = s.replace(/[0-9]/g, '')
    // s = s.replace(/[^a-z]/g, '')
    s = s.replace(/[^a-z]+/g, "")

    let revStr = s.split('').reverse().join('')
   if (s === revStr) {
       return true
   } else {
       return false
   }
}

console.log(noisyPalindrome("a92bcbXa"))