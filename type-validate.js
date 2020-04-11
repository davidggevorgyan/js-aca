const isString = ( ...strings ) => {
	strings.forEach( ( element ) => {
		if ( !( typeof element === 'string' || element instanceof String ) ) {
			throw new TypeError( `Incorrect type of argument, expected to get string instead of ${ typeof ( element ) }` );
		}
	} );
	return true;
};

const isNumber = ( ...numbers ) => {
	numbers.forEach( ( element ) => {
		if ( !( typeof element === 'number' && Number.isFinite( element ) ) ) {
			throw new TypeError( `Incorrect type of argument, expected to get number instead of ${ typeof ( element ) }` );
		}
	} );
	return true;
};

const isArray = ( ...arrays ) => {
	arrays.forEach( ( element ) => {
		if ( !( Array.isArray( element ) ) ) {
			throw new TypeError( `Incorrect type of argument, expected to get Array instead of ${ typeof ( element ) }` );
		}
	} );
};

module.exports = {
	isString,
	isNumber,
	isArray,
};
