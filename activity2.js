/*
	In this practice you will be given a randomly generated array of numbers
	called `randomNumbers`. The array will be different every time you run
	the code, and it has no guaranteed size. This is so that you must solve
	the problems dynamically instead of hard-coding the indexes. When you
	run the code the array will be printed out so you can test your solutions.
*/

var randomNumbers = [];
for (var i = 0; i < Math.floor(Math.random() * 5) + 5; ++i) {
	randomNumbers.push(Math.floor(Math.random() * 10) + 1);
}
console.log('randomNumbers = [' + randomNumbers.join(', ') + ']');

/*
	Problem 1
	Print to the console the very first number in the array
*/
console.log( 'firstNumber = [' + randomNumbers[0] + ']');

/*
	Problem 2
	Print to the console the second to last number in the array
*/
console.log( 'secondToLastNumber = [' + randomNumbers[randomNumbers.length - 2] + ']');
/*
	Problem 3
	Remove the first element in the array and print the array to the console
*/
randomNumbers.shift();
console.log( 'subtrackedFirstNumber = [' + randomNumbers[0] + ']');
/*
	Problem 4
	Iterate over every number in the array and print 3 things for each number:
	the number, half the number, and whether or not the number is greater than 3
	Hint: remember how we do mathematical comparisons
*/
for (var i = 0; i < randomNumbers.length; i = i + 1) {
  console.log( '[ ' + randomNumbers[i] + ' ]');

  var half = randomNumbers[i] / 2;
  console.log( half );

  if (randomNumbers[i] > 3) {
    console.log( randomNumbers[i] );
  }
}
/*
	Problem 5
	WITHOUT using the `.reverse()` method, create a new array named `reverseNumbers`
	and make it equal to the `randomNumbers` array, but in reverse order
*/


var reverseNumbers = [];
for (var i = 0; i < randomNumbers.length; i = i + 1) {
	reverseNumbers.unshift(randomNumbers[i]);
  console.log( reverseNumbers );
}
/*
for each [i] in the randomNumbers
	look up the [i] in the randomNumbers
	put the [i] at the front of the reverseNumbers
*/


