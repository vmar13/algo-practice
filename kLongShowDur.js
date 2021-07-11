//Given a list of strings shows, a list of integers durations,
// and an integer k, where shows[i] and durations[i] represent 
//the name and duration watched by the ith person, return the total duration 
//watched of the k most watched shows.

//INPUT:
let showList = ["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"]
let durs = [5, 3, 5, 13, 4]
let k = 2

const kLongShowDur = (arrShows, arrDurs, integer) => {
    let showsAndDur = {};
    let mostWatched = [];
    // Create object with shows and their corresponding durations.
    for (let i = 0; i < arrShows.length; i++) {  // showsAndDur = { 'Top Gun': 10, 'Aviator': 3, 'Roma': 13, 'Logan': 4 }
        showsAndDur[arrShows[i]] = showsAndDur[arrShows[i]] + arrDurs[i] || arrDurs[i] 
    }

    // Then, create array of just duration values and sort in descending order to find 2 most watched.
    let durVals = Object.values(showsAndDur).sort((a,b) => b - a)      // [13, 10, 4, 3]
    
    // Add just the first 2 (k) durations to the mostWatched obj.
    for (let i = 0; i < integer; i++) {
        mostWatched.push(durVals[i])
    }
    
    // Add up duration of two most watched shows for total duration.
    return mostWatched.reduce((acc, currVal) => acc + currVal)        //23
}

console.log(kLongShowDur(showList, durs, k))




