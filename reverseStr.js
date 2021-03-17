var reverseString = function(s) {
    let end = s.length - 1
    
    for (let i = 0; i < end; i++) {
        let temp = s[i]
        s[i] = s[end]
        s[end] = temp 
        end--
    }
}