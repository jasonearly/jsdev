/*
 * Example 1
 * What does the following code do? Can you explain why?
 */

var name = 'Fry'

function print() {
	console.log(this.name)
}

print()
print.call({})
print.call({ name: 'Bender' })



/*
 * Example 2
 * What does the following code do? Can you explain why?
 */

var age = 25
var user = {
	age: 28,
	getAge: function() {
		return this.age
	}
}

console.log( user.getAge() )
console.log( user.getAge.call(this) )
console.log( user.getAge.call({ age: 30 }) )

var getAge = user.getAge

console.log( getAge() )

/*
 * Example 3
 * What does the following code do? Can you explain why?
 */

var names = ['Cheryl', 'Tunt']

function printFullName(firstName, lastName) {
	console.log(this)
	console.log(firstName + ' ' + lastName)
}

printFullName.apply(null, names)

/*
 * Example 4
 * What does the following code do? Can you explain why?
 */

var log = console.log.bind(console)
log('Hello world!')

/*
 * Example 5
 * What does the following code do? Can you explain why?
 */

var logName = console.log.bind(console, 'Sterling')
logName()
logName('Archer')

/*
 * Practice Exercise
 *
 * For this exercise, you need to call the `printBalance`
 * function in 4 different ways to produce 4 different
 * results. The expected results are below:
 *
 * 1. Call the function so that it prints the global balance (500)
 * 2. Call the function so that it prints the balance inside of
 *    the shell object (200)
 * 3. Call the function so that it prints the balance inside of
 *    the bank object (600)
 * 4. Call the function so that it prints `undefined`
 *
 * You shouldn't need to create any new numbers, objects, or
 * functions to complete this exercise. You'll just need a
 * combination of .call() .apply() and .bind()
 */

var balance = 500

var shell = {
	balance: 200
}

var bank = {
	balance: 600,
	printBalance: function() {
		console.log(this.balance)
	}
}

//1
bank.printBalance.call(this);
//2
bank.printBalance.call(shell);
//3
bank.printBalance;
//4
bank.printBalance.call({});
