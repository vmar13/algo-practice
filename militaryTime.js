//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const timeConversion = s => {
    let strArr = Array.from(s)
    let dayOrNight = strArr.slice(-2).toString().replace(',', '')
    let startingHour;
    let added12;
    let newTime = [];
    
    if(dayOrNight === 'PM') {
        strArr.splice(-2)
        startingHour =  strArr.slice(0, 2).toString().replace(',', '')
        added12 = parseInt(startingHour) + 12
        added12.toString()
        // strArr.toString()
        strArr = strArr.splice(2)
        newTime.push(strArr)
        // newTime = strArr.splice(0, 2, added12)
        
    }
    newTime = strArr.toString().replace(startingHour, added12)
    // console.log(newTime.unshift(added12))
}