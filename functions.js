/*
	Problem 0
	Write a function that logs 'Hello world!' to the console
	(This one is done for you, to get you started)
*/

function hello() {
	console.log( 'Hello World!' );
}

/*
	Problem 1
	Write a function that calls the function from the first question,
	then logs your name to the console
*/

	hello(console.log('Jason'));

/*
	Problem 2
	Write a function that accepts a single argument, a name, and
	logs 'Hello <name>!' to the console, where `<name>` is the name
	passed into the function.
*/

function greet(name){
	console.log('Hello' + name + '!');
}
greet(Jason);

/*
	Problem 3
	Write a function that takes 3 arguments, all names, and calls
	the function from problem 2 once for each name.
*/

function hi(firstName, middleName, lastName){
	greet(firstName);
	greet(middleName);
	greet(lastName);
}
hi();

/*
	Problem 4 (BONUS)
	Write a function that takes a single argument, an array of names,
	and calls the function from problem 3 once for each name.
	Hint: You'll need to iterate over the array
*/
// names =  [];
// function z( names ){
// 	hi(names);
// }


/*
	Problem 5
	Write a function that takes two arguments, both numbers, and
	returns the sum of the two numbers.
	When you're done, the following code should print 10 to the console:
	console.log( add(8, 2) )
*/
function add(number1, number2){
	return number1 + number2;
}
console.log( add(8, 2) );

/*
	Problem 6
	Write a function that takes a single argument, an array of numbers,
	and returns the average of the numbers in the array.
	Hint: Look back on the code from 2 lessons ago that we used to compute an average
*/
var numbers = [1,2,3,4];
var total = 0;

function functionName ( numbers ) {
		numbers.forEach(function(number){
			total = (total + number);

			return total / numbers.length;
		}
);
		functionName();

