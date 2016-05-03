// Please refer to the object cheat sheet to help you through this exercise

/**
 * Problem 1
 *
 * Declare an object and store it in a variable called `name`.
 * The object should contain `first` and `last` properties that contain your names.
 */

var name = {
	firstName: 'Jason',
	lastName: 'Early',
};

console.log(name);

/**
 * Problem 2
 *
 * Modify the object you created in problem 1 to add a `middle` property.
 */

name.middle = 'John';

console.log(name);

/**
 * Problem 3
 *
 * Below you are given a `message` object. You should remove the `id` property
 * from the object and rename the `msg` property to `text`.
 */

var message = {
	id: 53,
	msg: 'I love Javascript!'
};

delete message.id;
message.text = message.msg;
delete message.msg;

console.log(message);

/**
 * Problem 4
 *
 * Below you are given a `data` object. Using dot-notation and bracket-notation,
 * log the indicated values to the console.
 */

var data = {
	value1: 'Log me!',
	value2: ["Don't log me.", "Log me!"],
	value3: {
		"nested-object": {
			value4: "Log me!"
		}
	}
};

console.log(data.value1);
console.log(data.value2[1]);
console.log(data.value3['nested-object'].value4);



/**
 * Problem 5
 *
 * Below you are given a `user` object with an empty method. Fill in the method
 * so that it returns the user's full name. So if `firstName` were 'Bob' and
 * `lastName` were 'Smith', it would return 'Bob Smith'
 */

var user = {
	firstName: 'Doctor',
	lastName: 'Krieger',
	getFullName: function() {
		console.log(user.firstName + ' ' + user.lastName);
	}
};

user.getFullName();

/**
 * Problem 6
 *
 * Below you have a `game` object with 2 methods. You have two tasks:
 *
 * 1. Modify the `addPoint` method so that when the score reaches 10,
 *    it prints out "YOU WIN!" and then resets the score to 0.
 * 2. Modify the `removePoint` method so that it doesn't allow the
 *    number of points to go below 0.
 */

var game = {
	points: 0,

	addPoint: function() {
		this.points = this.points + 1;
		if (game.points === 10) {
			console.log('YOU WIN!');
			game.points = 0;
		}
	},

	removePoint: function() {
		this.points = this.points - 1;
		if (game.points < 0) {
			game.points = 0;
		}
	};