//large to small sort on binarySearch

let viewedShows = {}
for(let i = 0; i < shows.length; i++){
    viewedShows[shows[i]] ? viewedShows[shows[i]] += durations[i] :
    viewedShows[shows[i]] = durations[i]
}

let topShows = Object.values(viewedShows)
topShows.sort((a,b) => b-a)
let results = 0
let i = 0
while(i<k){
    results += topShows[i]
    i++
}

return results