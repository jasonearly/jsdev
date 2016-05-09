/**
 * Below you will find an extremely simplified Library class. Your job
 * is to implement all of the methods I have outlined for you. If you
 * have questions, please ask. I have written tests for the library
 * below, so you can run your code and know when it works.
 */
class Library {
	constructor() {

	}

	/**
	 * Adds a new book to this library's inventory
	 *
	 * @param {String} title - The title of the new book to add
	 */
	addBook(title) {

	}

	/**
	 * Returns a list of every book in the library's inventory
	 *
	 * @return {Array} An array of book titles
	 */
	getListOfBooks() {

	}

	/**
	 * Determines whether or not a book is available. A book is
	 * available if the book exists, it's not checked out, and
	 * it's not reserved.
	 *
	 * @param {String} title - The title of the book
	 * @return {Boolean} true if the book is available, false otherwise
	 */
	isBookAvailable(title) {

	}

	/**
	 * Places a book in 'checked-out' status. When checked out, the book
	 * cannot be checked out or reserved until it's checked back in. If
	 * the book is currently reserved, the book is no longer reserved
	 * after being checked out. You can assume that if this method is
	 * called, the book exists. You can also assume that either the book
	 * is available, or it's reserved but the person who reserved it
	 * is the one checking it out.
	 *
	 * @param {String} title - The title of the book
	 */
	checkoutBook(title) {

	}

	/**
	 * Returns a previously checked out book. After checking in a book,
	 * it's available for both check out and reservation. You can
	 * assume that if this method is called, the book both exists and
	 * is already checked out.
	 *
	 * @param {String} title - The title of the book
	 */
	checkinBook(title) {

	}

	/**
	 * Reserves a book.
	 *
	 * @param {String} title - The title of the book
	 */
	reserveBook(title) {

	}

}

/*
 * These are the tests for the library class. Do not modify them.
 */

var library = new Library();
var books = [
	'A Tale of Two Cities',
	'Harry Potter and the Half-Blood Prince',
	'No One Here Gets Out Alive'
]

// Add the books and ensure they exist

books.forEach(library.addBook.bind(library))

if ((library.getListOfBooks() || []).sort().join() !==
	'A Tale of Two Cities,Harry Potter and the Half-Blood Prince,No One Here Gets Out Alive') {
	console.error('Your `getListOfBooks` function isn\'t working.')
	console.error('Expected: [' + books.sort().join(', ') + ']')
	console.error('Actual: [' + (library.getListOfBooks() || []).sort().join(', ') + ']')
	return
}

// Ensure they're all available

for (var book of books) {
	if (library.isBookAvailable(book) !== true) {
		console.error('"' + book + '" isn\'t available when it should be.')
		return
	}
}

// Check out a book, check if it's available, then check it back in

library.checkoutBook(books[1])
if (library.isBookAvailable(books[1]) !== false) {
	console.error('A book is available even though it\'s checked out.')
	return
}
library.checkinBook(books[1])
if (library.isBookAvailable(books[1]) !== true) {
	console.error('A book isn\'t available after checking it back in.')
	return
}

// Reserve a book, check if it's available, then check book out and back in

library.reserveBook(books[1])
if (library.isBookAvailable(books[1]) !== false) {
	console.error('A book is available even though it\'s reserved.')
	return
}
library.checkoutBook(books[1])
library.checkinBook(books[1])
if (library.isBookAvailable(books[1]) !== true) {
	console.error('A book isn\'t available after checking it back in.')
	return
}

console.log('Your library works!')
Status API Training Shop Blog About
