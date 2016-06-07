'use strict';
/*
 * Example 1
 * What does the following code do? Can you explain why?
 */

function doSomething(list) {
	list.forEach(function(item) {
		console.log(item);
	});
}

doSomething([1,2,3]);

/*
 * Example 2
 * What does the following code do? Can you explain why?
 */

var balance = 0;

function printBalance() {
	console.log(balance);
}

printBalance();

balance = 500;

printBalance();

/*
 * Example 3
 * What does the following code do? Can you explain why?
 */

var numbers = [5, 1, 8, 2, 4];

function add(amount) {
	numbers.forEach(function(number, index) {
		numbers[index] = number + amount;
	});
}

add(1);

/*
 * Example 4
 * What does the following code do? Can you explain why?
 */

function createCounter() {
	var count = 0;

	return {
		increment: function() {
			count = count + 1;
		},
		getCount: function() {
			return count;
		}
	};
}
var counter = createCounter();
counter.increment();
/*
 * Practice Exercise
 *
 * Fill in the createAdder() function below. The createAdder function
 * returns another function. The function it returns takes a number
 * argument and add `amount` to it. The function it returns should
 * return a number. Take this example:
 *
 * var addTen = createAdder(10)
 * var fifteen = addTen(5)
 */

//createAdder(10)
function createAdder(amount) {

	return function(number){
		return amount + number;
	};
}

var addTen = createAdder(10);
var fifteen = addTen(5);




