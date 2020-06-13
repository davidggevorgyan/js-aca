const Author = require( './author' );

class Book {

	constructor( title, author, price, quantity ) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity;
	}

	get title() {
		return this._title;
	}

	set title( value ) {
		this._title = value;
	}

	get author() {
		return this._author;
	}

	set author( value ) {
		if ( value instanceof Author ) {
			this._author = value;
		} else {
			throw new TypeError( 'Author should be an instance of Author class' );
		}
	}

	get price() {
		return this._price;
	}

	set price( value ) {
		this._price = value;
	}

	get quantity() {
		return this._quantity;
	}

	set quantity( value ) {
		this._quantity = value;
	}

	getProfit() {
		return this.price * this.quantity;
	}

	toString() {
		return `Title:${ this.title } Author:"${ this.author }" Price:${ this.price } Quantity:${ this.quantity }`;
	}

}

module.exports = Book;
