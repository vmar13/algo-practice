class Solution {
    solve(fighters, bosses) {
        let fightersTotal = 0;
        let bossesTotal = 0;
        let finalArr = [];

        for(let num of fighters){
            if(num === 1){
                fightersTotal += 1
            }
        }

        for(let i = 0; i < bosses.length; i++){
            for(let j = 0; j < bosses[i].length; j++){
                if(bosses[i][j] === 1){
                    bossesTotal += 1
                }
            }
            if(fightersTotal <= bossesTotal){
                finalArr.push(bosses[i])
            }
            bossesTotal = 0;
        }
        return finalArr

    }
}