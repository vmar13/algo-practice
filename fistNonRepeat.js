const firstNonRepeatChar = str => {
    let len = str.length,
        char, 
        charCount = {}
    for(var i =0; i<len; i++){
      char = str[i]
      if(charCount[char]){
        charCount[char]++
      }
      else
        charCount[char] = 1
    }
  
  }  
