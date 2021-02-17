//Given a list of integers nums, return whether you can rearrange the order of nums 
//such that the difference between every consecutive two numbers is the same.

const solve= (nums) => {
    let sorted = nums.sort((a, b) => a-b)
    let diff = sorted[1] - sorted[0]

    for(let i = 0; i <= sorted.length; i++){
        if(sorted[i+1]){
        if((sorted[i+1]-sorted[i]) != diff){
            
            return false
        }
        }
    }
    
        return true
}

console.log(solve([7, 1, 5, 3]))

//true