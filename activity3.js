var age = 17;

//runs multiple true statements
if (age < 16) {
	console.log("You can't do much except go to school");
}
if (age  === 16 ){
	console.log('You can drive');
}
if (age  >= 18 ){
	console.log('You can vote');
}
if (age  >= 21 ){
	console.log('You can drink');
}
if (age  >= 25 ){
	console.log('You can rent a car');
}
if (age  >= 35 ){
	console.log('You can run for President');
}
if (age  >= 62 ){
	console.log('You can retire');
}


//runs an answer based on a single condition
if (age < 16) {
	console.log("You can't do much except go to school");
} else {
	console.log('You can do other things');
}

//Switches
var grade = 'A';
switch(grade) {
case 'A':
	console.log('Great job!');
	break;

case 'B':
	console.log('Good job');
	break;

case 'C':
	console.log('You could do better');
	break;

case 'D':
	console.log("You're not doing so well");
  break;

case 'F':
	console.log("You've failed");
	break;

default:
	console.log('We dont know what your grade is');
	break;
}
