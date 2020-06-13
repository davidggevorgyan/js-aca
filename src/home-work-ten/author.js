class Author {

	constructor( name, email, gender ) {
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	get name() {
		return this._name;
	}

	set name( value ) {
		this._name = value;
	}

	get email() {
		return this._email;
	}

	set email( value ) {
		this._email = value;
	}

	get gender() {
		return this._gender;
	}

	set gender( value ) {
		if ( value === 'male' || value === 'female' ) {
			this._gender = value;
		} else {
			throw new RangeError( 'Invalid gender was used. Please use male or female' );
		}

	}

	toString() {
		return `Name:${ this.name } Email:${ this.email } Gender:${ this.gender }`;
	}

}

module.exports = Author;
