/**
 * Write a recursive function to determine whether all digits of the number are odd or not.
 * @param {Number} number
 */
const taskOne = ( number ) => {
	const nextNumber = Math.trunc( number / 10 );
	const isLastDigitOdd = number % 2 === 1;

	if ( !isLastDigitOdd ) {
		return false;
	}
	if ( !nextNumber ) {
		return isLastDigitOdd;
	}
	return taskOne( nextNumber );
};

/**
 * Given an array of numbers. Write a recursive function to find its minimal positive element.
 * (if such element does not exist, return -1)․
 * @param {Array} arr
 */
const taskTwo = ( arr, keepOriginal = true ) => {
	let array = arr;
	if ( keepOriginal ) {
		array = Array.from( arr );
	}
	while ( array.length > 1 ) {
		if ( array[0] >= 0 ) {
			if ( array[1] >= 0 ) {
				if ( array[0] > array[1] ) {
					array.shift();
					taskTwo( array, false );
				} else {
					array.splice( 1, 1 );
					taskTwo( array, false );
				}
			} else {
				array.splice( 1, 1 );
				taskTwo( array, false );
			}
		} else {
			array.shift();
			taskTwo( array, false );
		}
	}
	return array[0] < 0 ? -1 : array[0];
};

/**
 * Write a recursive function which receives  a number as arguments and returns
 * the fibonacci sequence as array.
 * @param {Number} number
 */
const taskThree = ( number ) => {
	if ( number < 1 ) {
		return [];
	}
	if ( number < 2 ) {
		return [1];
	}
	if ( number < 3 ) {
		return [1, 1];
	}

	const result = taskThree( number - 1 );
	result.push( result[number - 2] + result[number - 3] );
	return result;
};

/**
 * Given an array of nested arrays. Write a recursive function that flattens it.
 * (Hint create function that concats arrays).
 * @param {Array} array
 */
const taskFour = ( array ) => {
	let result = [];
	array.forEach( ( element ) => {
		if ( typeof ( element ) === 'object' && element !== null ) {
			result = result.concat( taskFour( element ) );
		} else {
			result = result.concat( element );
		}
	} );
	return result;
};

/**
 *  Given a number. Write a function that calculates its sum of the digits and if that
 * sum has more than 1 digit find the sum of digits of that number.
 * Repeat that process if needed and return the result.
 * @param {Number} number
 */
const taskFive = ( number ) => {
	let result = 0;
	let numberClone = number;
	while ( numberClone ) {
		result += numberClone % 10;
		numberClone = Math.trunc( numberClone / 10 );
	}
	if ( result > 9 ) {
		result = taskFive( result );
	}
	return result;
};

module.exports = {
	taskOne, taskTwo, taskThree, taskFour, taskFive,
};
