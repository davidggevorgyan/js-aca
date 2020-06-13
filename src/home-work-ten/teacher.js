const Person = require( './person' );

class Teacher extends Person {

	constructor( firstName, lastName, gender, age, program, pay ) {
		super( firstName, lastName, gender, age );
		this.program = program;
		this.pay = pay;
	}

	get program() {
		return this._program;
	}

	set program( value ) {
		this._program = value;
	}

	get pay() {
		return this._pay;
	}

	set pay( value ) {
		this._pay = value;
	}

	toString() {
		return `${ super.toString() } Program:${ this.program } Pay:${ this.pay }`;
	}

}

module.exports = Teacher;
