//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const timeConversion = s => {
  let dayOrNight = s.charAt(8);
  let hour = '';

  if (dayOrNight === 'A') {
    s.substring(0,2) === '12' ? hour = '00' :  hour = s.substring(0,2);
  } else {
    s.substring(0,2) === '12' ? hour = s.substring(0,2) : hour = parseInt(s.substring(0,2), 10) + 12;
  }
  return hour + s.substring(2,8);
}

console.log(timeConversion('07:05:45PM'))

//12AM to 00
//1AM - 12PM -> do nothing
//1PM - 11PM -> add 12