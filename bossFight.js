//You are given a list of integers fighters and a two dimensional list bosses. 
//The fighters list contains 1s and 0s with a 1 representing a fighter. 
//Similarly, each bosses list contains 1s and 0s with a 1 representing a boss.
//Given that fighters can beat a bosses row if it contains more fighters than bosses, 
//return a new bosses matrix with defeated boss rows removed.

const bossFight = (fightersArr, bossMatrix) => {
    let fightersScore = 0;
    let bossesScore = 0;
    let winningBosses = []; // The new bosses matrix with defeated bosses removed

    for (let digit of fightersArr) { // Find score of fighters array // 2
        fightersScore += digit
    }
    
    for (let subArr of bossMatrix) { // Check score of each boss subarray. Then, compare to fightersScore and remove losing boss subarrays (destructively).
        for (let digit of subArr) {
            bossesScore += digit
        }
        if (bossesScore > fightersScore) {
            winningBosses.push(subArr)
            bossesScore = 0
        }
    }
    
    return winningBosses;
}

console.log(bossFight([0, 1, 1], [
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1]]))


//SOLUTION
//[
//     [0, 1, 1],
//     [1, 1, 1]
// ]

// const bossFight = (fighters, bosses) => {
//     let fightersCount = 0;
//     let bossCount = 0;
//     let winningBosses = [];

//     for(let num of fighters){
//         num === 1 ? fightersCount+= 1 : null;
//     }
    
//     for(let subArr of bosses){
//         for(let ele of subArr){
//             ele === 1 ? bossCount+= 1 : null;
//         }
//     fightersCount <= bossCount ? winningBosses.push(subArr) : null; 
//     bossCount = 0;
//     }

//     return winningBosses
// }

// class Solution {
//     solve(fighters, bosses) {
//         let fightersTotal = 0;
//         let bossesTotal = 0;
//         let finalArr = [];

//         for(let num of fighters){
//             if(num === 1){
//                 fightersTotal += 1
//             }
//         }

//         for(let i = 0; i < bosses.length; i++){
//             for(let j = 0; j < bosses[i].length; j++){
//                 if(bosses[i][j] === 1){
//                     bossesTotal += 1
//                 }
//             }
//             if(fightersTotal <= bossesTotal){
//                 finalArr.push(bosses[i])
//             }
//             bossesTotal = 0;
//         }
//         return finalArr

//     }
// }