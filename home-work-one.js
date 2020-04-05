/**
 * Given a number. Print “odd” if the number is odd and “even” if it’s even.
 * @param {number} number
 */
const taskOne = ( number ) => {
	if ( typeof ( number ) !== 'number' ) {
		throw new TypeError( `Incorrect type of argument, expected to get number instead of ${ typeof ( number ) }` );
	}

	if ( number % 2 === 0 ) {
		return 'even';
	}
	return 'odd';
};


/**
 * Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
 * @param {number} a
 * @param {number} b
 */
const taskTwo = ( a, b ) => {
	if ( typeof ( a ) !== 'number' || typeof ( b ) !== 'number' ) {
		return NaN;
	}

	if ( Math.max( a, b ) % Math.min( a, b ) === 0 ) {
		return 1;
	}
	return 0;
};


/**
 * Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
 * Sum of the angles of a triangle equals 180 degrees.
 * @param {number} a
 * @param {number} b
 */
const taskThree = ( a, b ) => {
	if ( typeof ( a ) !== 'number' || typeof ( b ) !== 'number' ) {
		return NaN;
	}

	if ( a + b >= 180 ) {
		throw new RangeError( 'The sum of arguments must be less than 180' );
	}

	return 180 - a - b;
};


/**
 * Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
 * @param {number} number
 */
const taskFour = ( number ) => {
	if ( typeof ( number ) !== 'number' ) {
		return NaN;
	}

	let result = 0;
	for ( let i = 3; i !== 0; i-- ) {
		let j = i;
		let stringSum = '';
		for ( ; j !== 0; j-- ) {
			stringSum += String( number );
		}
		result += Number( stringSum );
	}
	return result;
};


/**
 * Given a positive integer. Bring the last digit of the number to the beginning.
 * Print the new number. If the last digit of the inserted number is 0, number remains the same.
 * @param {number} number
 */
const taskFive = ( number ) => {
	if ( typeof ( number ) !== 'number' ) {
		return NaN;
	}

	if ( number % 10 === 0 || number < 10 ) {
		return number;
	}

	const lastDigit = number % 10;
	return Number( String( lastDigit ) + String( Math.trunc( number / 10 ) ) );
};


/**
 * Given five numbers as input. Calculate and print the average of the numbers(without using arrays)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 */
const taskSix = ( a, b, c, d, e ) => {
	if ( typeof ( a ) !== 'number'
		|| typeof ( b ) !== 'number'
		|| typeof ( c ) !== 'number'
		|| typeof ( d ) !== 'number'
		|| typeof ( e ) !== 'number' ) {
		return NaN;
	}

	return ( a + b + c + d + e ) / 5;
};


/**
 * Returns array list separated with comma and with last item separated with connection word
 * @param {Array} arr to be listed
 * @param {String} text connection word for last item
 */
function taskSevenTextCreator( arr, text ) {
	if ( arr.length === 0 ) {
		throw new RangeError( 'The array should have at least one element' );
	}
	let result = arr.shift();
	while ( arr.length > 1 ) {
		result = `${ result }, ${ arr.shift() }`;
	}
	if ( arr.length === 1 ) {
		result = `${ result } ${ text } ${ arr.shift() }`;
	}
	return result;
}


/**
 * Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
 * @param {number} number
 */
const taskSeven = ( number ) => {
	if ( typeof ( number ) !== 'number' ) {
		return NaN;
	}
	let message = '';
	const numbers = [3, 5, 7];
	const multiples = [];

	numbers.forEach( ( element ) => {
		if ( number % element === 0 ) {
			multiples.push( element );
		}
	} );

	if ( multiples.length === 0 ) {
		message = `${ number } is not a multiple of ${ taskSevenTextCreator( numbers, 'or' ) }.`;
	} else {
		message = `${ number } is a multiple of ${ taskSevenTextCreator( multiples, 'and' ) }.`;
	}

	return message;
};


module.exports = {
	taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, taskSeven,
};
