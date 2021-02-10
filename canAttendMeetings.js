const canAttendMeetings = (intervals) => {
    if(intervals.length < 2) return true;

    intervals.sort((a,b) => {return a[0] - b[0]});

    return intervals
}

console.log(canAttendMeetings([[7,10],[2,4]]))