
// 	This loop counts from 1 to 100, printing every number along the way.
// 	Use this code as a starting point for the following problems.
// */

// for (var i = 1; i <= 100; i = i + 1) {
// 	console.log(i);
// }


// 	Problem 1
// 	Write a loop that counts backwards from 100 to 1

// for (var i = 100; i >= 1; i = i - 1) {
// 	console.log(i);
// }
// /*
// 	Problem 2
// 	Write a loop that counts from 1 to 100, but counts by 5 instead of 1
// */
// for (var i = 0; i <= 100; i = i + 5) {
// 	console.log(i);
// }
/*
	Problem 3
	Write a loop that counts from 1 to 100, but instead of numbers,
	print 'even' for every even index, and 'odd' for every odd index.
*/
// for (var i = 1; i <= 100; i = i + 1) {
// 	if (i % 2 === 1) {
// 		console.log('even');
// 	} else {
// 		console.log('odd');
// 	}
// 	//console.log(i);
// }
/*
	Problem 4
	Write a loop that counts from 1 to 100. Instead of printing out
	the numbers, add them up and store them in a variable. Stop
	adding up numbers when your total is greater than 100. Print
	out the final total.
	BONUS: How many numbers did you add up before getting over 100?
*/

var total = 0;
for (var i = 1; i <= 100; i = i + 1) {
	total = (total + i);
	if (total <= 100 ){
		console.log(total);
		console.log(i);
	}

	//  i plus itself to 100
	// if total > 100 stop adding
	// console.log(finalTotal)




}




