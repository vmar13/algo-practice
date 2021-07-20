// You're tasked with writing a function which determines if a word matches a pattern. Ex. given the pattern "d3dog" and the word "datadog" your function should return True. However, given the same pattern and the word "datadogs", your function should return False.

// The matcher has the following constraints:

// Patterns only have digits in {1,2,3,4}
// We only have single digits
// You do not need to verify these constraints in your solution.

// matches("d3dog", "datadog") # => True
// matches("d3dog", "datadogs") # => False
// matches("d3dog", "dataaaa") # => False

function isCharNumber(c) {
    return c >= '0' && c <= '9';
  }
  
  const patternMatch = (word, pattern) => {
    let word_idx = 0;
    
    for (let i = 0; i < pattern.length; i++) {
      if (isCharNumber(pattern[i])) {
        word_idx += pattern[i] - '0';
      } else {
        if (pattern[i] !== word[word_idx]) {
          return false; 
        }  
      }
      word_idx  += 1;
    }
    return true;
  }
  
  
  def is_match(pattern, word):
      word_idx = 0
      for i, c in enumerate(pattern):
         if c.isdigit():
             word_idx += int(c)
         else:
                   if word_idx >= len(word):
                      return False
                   if c != word[word_idx]:
                      return False
                   word_idx += 1
  
      return word_idx == len(word)
  
  console.log(patternMatch('datadog', 'd3dog'))