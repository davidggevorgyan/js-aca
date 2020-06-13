const Person = require( './person' );

class Student extends Person {

	#examsData = [];

	constructor( firstName, lastName, gender, age, programs, year, fee ) {
		super( firstName, lastName, gender, age );
		this.programs = programs;
		this.year = year;
		this.fee = fee;
	}

	get programs() {
		return this._programs;
	}

	set programs( value ) {
		if ( value instanceof Array ) {
			value.forEach( ( element ) => {
				if ( typeof element !== 'string' ) {
					throw new TypeError( 'Programs should be array of strings' );
				}
			} );
			this._programs = value;
		} else {
			throw new TypeError( 'Programs should be array of strings' );
		}
	}

	get year() {
		return this._year;
	}

	set year( value ) {
		this._year = value;
	}

	get fee() {
		return this._fee;
	}

	set fee( value ) {
		this._fee = value;
	}

	toString() {
		return `${ super.toString( this ) } Program:${ this.programs } Year:${ this.year } Fee:${ this.fee }`;
	}

	passExam( program, grade ) {
		if ( !this.programs.includes( program ) ) {
			throw new RangeError( 'Specified program is not assigned to this student' );
		}
		if ( grade > 100 || grade < 0 ) {
			throw new RangeError( 'Grade should be between 0 and 100' );
		}
		const examResult = {
			date: new Date(),
			year: new Date().getFullYear(),
			grade,
			program,
		};
		this.#examsData.push( examResult );
		const currentYearPassedExamsCount = this.#examsData.reduce(
			( accumulator, currentValue ) => {
				if ( currentValue.year === this.year && currentValue.grade >= 50 ) {
					// eslint-disable-next-line no-param-reassign
					accumulator += 1;
				}
				return accumulator;
			},
			0,
		);
		if ( currentYearPassedExamsCount === this.programs.length ) {
			this.year += 1;
		}
	}

}

module.exports = Student;
