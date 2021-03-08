
const moveZeroes = nums => {
  let counter = 0;

  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== 0){
          nums[counter] = nums[i];
          counter += 1;
      }
  }

  for(counter; counter < nums.length; counter++){
      nums[counter] = 0;
  }

  return nums; 
}




// function Stack() {
//     this.count = 0;
//       this.storage = {};
    
//       this.push = function (value) {
//         this.storage[this.count] = value;
//         this.count++;
//       }
    
//       this.pop = function () {
//         if (this.count === 0) {
//           return undefined;
//         }
//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//       }
    
//       this.peek = function () {
//         return this.storage[this.count - 1];
//       }
    
//       this.size = function () {
//         return this.count;
//       }
//     }