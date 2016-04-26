/*
	As practice for the following problem, try to work these expressions
	out to see what the result is. Use the truth tables for guidance.
	true || false
	true && false
	true && !false
	true || (false && false)
	(true && false) || (true || false)
	false || !(false && false)
	true && true && false
*/

/*
	For this problem, you must fill in the if-condition such that we print
	'You should be at work!' during work hours and 'Enjoy your time at home!'
	during non-work hours. For the purposes of this exercise, work hours are
	Monday through Friday from 9 to 5, except for Holidays.
*/

var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][Math.floor(Math.random() * 7)];
var hourOfDay = Math.floor(Math.random() * 23) + 1;
var isAHoliday = (Math.random() > .5);

console.log('Day of the week: ' + dayOfWeek);
console.log('Hour of the day: ' + hourOfDay);
console.log('Is it a holiday? ' + (isAHoliday ? 'Yes' : 'No'));



if (dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday' && hourOfDay >=9 && hourOfDay <= 17 && isAHoliday === 'No')  {
	console.log( 'You should be at work!');
} else {
	console.log( 'Enjoy your time at home!');
}




// COMMON SOLUTION 1

if (dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday' && hourOfDay >= 9 && hourOfDay <= 17 && isHoliday === false) {
	console.log('You should be at work!')
} else {
	console.log('Enjoy your time at home!')
}

// COMMON SOLUTION 2

if ((dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') && hourOfDay >= 9 && hourOfDay <= 17 && isHoliday === false) {
	console.log('You should be at work!')
} else {
	console.log('Enjoy your time at home!')
}