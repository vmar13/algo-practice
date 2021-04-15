//Given a list of strings shows, a list of integers durations,
// and an integer k, where shows[i] and durations[i] represent 
//the name and duration watched by the ith person, return the total duration 
//watched of the k most watched shows.

const kLongShowDur = (shows, durations, k) => {
    let showDur = {};
    let totalDur = 0;

    for (let i = 0; i < shows.length; i++) {
        showDur[shows[i]] ? showDur[shows[i]] += durations[i] : showDur[shows[i]] = durations[i]          
    }
    
    let mostWatched = Object.values(showDur).sort((a,b) => b - a)

    for (let i = 0; i < k; i++) {
        totalDur += mostWatched[i]
    }
    
    return totalDur
 }

//INPUT:
let showList = ["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"]
let durs = [5, 3, 5, 13, 4]
let k = 2

 console.log(kLongShowDur(showList, durs, k))

 //OUTPUT: 23