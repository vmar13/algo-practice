const canAttendMeetings = (intervals) => {
    
    //If you only have one meeting (a single array with 2 elements), return true
    if(intervals.length < 2) return true;

    //Sort intervals arr numerically in ascending order
    intervals.sort((a,b) => {return a[0] - b[0]});

    //Declare a meeting end point, which grabs the first subarray and
    //accesses that subarray's 2nd element (at index [1])
    let end = intervals[0][1];

    for(let i = 1; i < intervals.length; i++) {
        if(end > intervals[i][0]) return false;
        if(end < intervals[i][1]) end = intervals[i][1];
    }

    return intervals.length
}

console.log(canAttendMeetings([[7,10],[2,4]]))

// console.log(canAttendMeetings([[2,4],[7,10]]))