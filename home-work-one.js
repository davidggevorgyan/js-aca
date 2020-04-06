function isString( value ) {
	if ( !( typeof value === 'string' || value instanceof String ) ) {
		throw new TypeError( `Incorrect type of argument, expected to get string instead of ${ typeof ( value ) }` );
	}
	return true;
}

function isNumber( value ) {
	if ( !( typeof value === 'number' && Number.isFinite( value ) ) ) {
		throw new TypeError( `Incorrect type of argument, expected to get number instead of ${ typeof ( value ) }` );
	}
	return true;
}

/**
 * Given a number. Print “odd” if the number is odd and “even” if it’s even.
 * @param {number} number
 */
const taskOne = ( number ) => {
	isNumber( number );

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
	isNumber( a );
	isNumber( b );

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
	isNumber( a );
	isNumber( b );
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
	isNumber( number );
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
	isNumber( number );
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
	isNumber( a );
	isNumber( b );
	isNumber( c );
	isNumber( d );
	isNumber( e );
	return ( a + b + c + d + e ) / 5;
};


/**
 * Returns array list separated with comma and with last item separated with connection word
 * @param {Array} arr to be listed
 * @param {String} text connection word for last item
 */
function taskSevenTextCreator( arr, text ) {
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
	isNumber( number );
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


/**
 * Given an age, figure out whether someone is a baby(1 months - 12 months),
 * toddler (1 year - 2 years),child(3 years - 12 years ), teenager(13 years - 17 years)
 * or adult(18 years and more ). Also check that age in months is between 1 and 12.
 * @param {number} count
 * @param {string} measurement months or years
 */
const taskEight = ( count, measurement ) => {
	isNumber( count );
	isString( measurement );
	let result = '';
	if ( measurement.includes( 'month' ) && count > 12 ) {
		throw new RangeError( 'Age in months should not exceed 12 months' );
	} else if ( ( measurement.includes( 'month' ) && count <= 12 ) || ( measurement.includes( 'years' ) && count <= 1 ) ) {
		result = 'baby';
	} else if ( measurement.includes( 'year' ) && count <= 2 ) {
		result = 'toddler';
	} else if ( measurement.includes( 'year' ) && count <= 12 ) {
		result = 'child';
	} else if ( measurement.includes( 'year' ) && count <= 17 ) {
		result = 'teenager';
	} else if ( measurement.includes( 'year' ) && count > 17 ) {
		result = 'adult';
	} else {
		throw new SyntaxError( 'Invalid data passed to the function' );
	}
	return result;
};


/**
 * Given three numbers. Sort them by the ascending order.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
const taskNine = ( a, b, c ) => {
	isNumber( a );
	isNumber( b );
	isNumber( c );

	const max = Math.max( a, b, c );
	const min = Math.min( a, b, c );
	const mid = a + b + c - max - min;

	return `${ min }, ${ mid }, ${ max }`;
};


/**
 * Percentage marks obtained by a student in three exams are to be entered to a computer.
 * An indication of Pass or Fail is given out after the three marks are entered.
 * The criteria for passing are as follows:
 * A student passes if all three examinations are passed.
 * Additionally a student may pass if only one subject is failed but the overall average
 * is greater than or equal to 50
 * The pass mark for an individual subject is 40.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
const taskTen = ( a, b, c ) => {
	isNumber( a );
	isNumber( b );
	isNumber( c );

	const max = Math.max( a, b, c );
	const min = Math.min( a, b, c );
	const mid = a + b + c - max - min;

	if ( min >= 40 || ( mid >= 40 && ( max + min + mid ) / 3 >= 50 ) ) {
		return 'Passed';
	}

	return 'Not passed';
};


/**
 * Find the sign of product of three numbers without multiplication operator.
 * Display the specified sign.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
const taskEleven = ( a, b, c ) => {
	isNumber( a );
	isNumber( b );
	isNumber( c );

	let negativeCount = 0;

	if ( a === 0 || b === 0 || c === 0 ) {
		return 'unsigned';
	}
	if ( a < 0 ) {
		negativeCount += 1;
	}
	if ( b < 0 ) {
		negativeCount += 1;
	}
	if ( c < 0 ) {
		negativeCount += 1;
	}
	if ( negativeCount % 2 === 1 ) {
		return '-';
	}
	return '+';
};


/**
 * Input three numbers a, b, c respectively, where a is a non zero number and write a program
 * to solve quadratic equations: ax2+ bx+c=0. (Hint: use Math.pow or Math.sqrt).
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
const taskTwelve = ( a, b, c ) => {
	isNumber( a );
	isNumber( b );
	isNumber( c );

	if ( a === 0 ) {
		return 'Enter valid constants';
	}

	const x1 = ( -b + Math.sqrt( b ** 2 - 4 * a * c ) ) / ( 2 * a );
	const x2 = ( -b - Math.sqrt( b ** 2 - 4 * a * c ) ) / ( 2 * a );

	if ( x1 === x2 ) {
		return `Solution is ${ x1 }`;
	}
	if ( !Number.isNaN( x1 ) || !Number.isNaN( x2 ) ) {
		return `Solutions are ${ Math.min( x1, x2 ) } and ${ Math.max( x1, x2 ) }`;
	}

	return 'Solution does not exists';

};


/**
 * Given the following code rewrite it using only two if operators. (Hint: use logical operators).
 * @param {number} number
 */
const taskThirteen = ( number ) => {
	const n = Number( number );
	let i = 0;
	let j = 0;

	if ( n % 2 === 0 && !Math.floor( n / 10 ) ) {
		i += 1;
	}

	if ( n % 3 === 0 && n % 10 === 1 ) {
		j += 1;
	}
	return `i = ${ i }, j = ${ j }`;
};


/**
 * Insert a digit and a number. Check whether the digits contains in the number or not.
 * @param {number} digit
 * @param {number} number
 */
const taskFourteen = ( digit, number ) => {
	isNumber( digit );
	isNumber( number );

	if ( String( number ).indexOf( String( digit ) ) === -1 ) {
		return 'No';
	}

	return 'Yes';
};

/**
 * Enter a number. Reverse its first and last digits. Print the new number.
 * @param {number} number
 */
const taskFifteen = ( number ) => {
	isNumber( number );
	const stringNumber = String( number );
	if ( stringNumber.length === 1 ) {
		return number;
	}
	const firstDigit = stringNumber.substr( 0, 1 );
	const lastDigit = stringNumber.substr( -1 );
	const middleNumber = stringNumber.slice( 1, -1 );
	return Number( `${ lastDigit }${ middleNumber }${ firstDigit }` );
};


/**
 * Write a program which will compute the area of a rectangular or a triangle after
 * prompting the user to type the name of the figure name.
 * Also check that entered numbers are positive. For the triangle entered
 * numbers are height and and base.
 * @param {string} figure rectangle or triangle
 * @param {number} a
 * @param {number} b
 */
const taskSeventeen = ( figure, a, b ) => {
	isString( figure );
	isNumber( a );
	isNumber( b );

	if ( a <= 0 || b <= 0 ) {
		return 'Please enter only positives';
	}
	if ( !figure.includes( 'rectangle' ) && !figure.includes( 'triangle' ) ) {
		return 'Please enter a valid figure name';
	}

	let result;
	if ( figure.includes( 'triangle' ) ) {
		result = ( a * b ) / 2;
	} else if ( figure.includes( 'rectangle' ) ) {
		result = a * b;
	}
	return `Square of the ${ figure } is ${ result }`;
};


module.exports = {
	taskOne,
	taskTwo,
	taskThree,
	taskFour,
	taskFive,
	taskSix,
	taskSeven,
	taskEight,
	taskNine,
	taskTen,
	taskEleven,
	taskTwelve,
	taskThirteen,
	taskFourteen,
	taskFifteen,
	taskSeventeen,
};
