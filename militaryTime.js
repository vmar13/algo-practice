//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const timeConversion = s => {
  let dayOrNight = s.charAt(8);
  console.log(dayOrNight)
  let hour = '';

  if (dayOrNight === 'A') {

  } else {

  }
}

console.log(timeConversion('07:05:45PM'))