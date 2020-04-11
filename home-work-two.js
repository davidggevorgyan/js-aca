const { isNumber, isArray } = require( './type-validate' );


/**
 * Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise
 * @param {number} number
 */
const taskOne = ( number ) => {
	isNumber( number );
	if ( number < 2 ) {
		return 'no';
	}
	for ( let i = 2; i < number; i++ ) {
		if ( number % i === 0 ) {
			return 'no';
		}
	}
	return 'yes';
};


/**
 * Given a number n ( n>= 0 ). Print nth Fibonacci number.
 * (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
 * @param {number} number
 */
const taskTwo = ( number ) => {
	isNumber( number );

	if ( number < 2 ) {
		return number;
	}
	const fib = [0, 1];

	for ( let i = 2; i <= number; i++ ) {
		fib.push( fib[fib.length - 1] + fib[fib.length - 2] );
	}
	return fib[fib.length - 1];
};


/**
 * Given a number n( n> 0 ). Print Fibonacci series up to n.
 * @param {number} number
 * @returns {Array} Fibonacci series up to number
 */
const taskThree = ( number ) => {
	isNumber( number );
	if ( number <= 1 ) {
		return [0];
	}

	const fib = [0, 1];
	while ( fib[fib.length - 1] + fib[fib.length - 2] < number ) {
		fib.push( fib[fib.length - 1] + fib[fib.length - 2] );
	}

	return fib;
};


/**
 * Insert a number. Calculate product and sum of the digits of the number.
 * If product is divisible by the sum, print the quotient, otherwise print the remainder.
 * @param {number} number
 */
const taskFour = ( number ) => {
	isNumber( number );
	if ( number === 0 ) {
		return 'Cannot calculate.';
	}
	let product = 1;
	let sum = 0;
	const numberArray = Array.from( String( number ), Number );
	for ( let i = 0; i < numberArray.length; i++ ) {
		sum += numberArray[i];
		product *= numberArray[i];
	}

	if ( product % sum === 0 ) {
		return `Quotient is ${ product / sum }.`;
	}
	return `Remainder is ${ product % sum }.`;
};


/**
 * Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced
 * numbers by the given num length over the specified interval (from a to b).
 * @param {number} a
 * @param {number} b
 * @param {number} num
 * @returns {Array}
 */
const taskNine = ( a, b, num ) => {
	isNumber( a, b, num );
	if ( num === 0 ) {
		return [];
	}
	const resultArr = [a];
	const step = ( b - a ) / ( num - 1 );
	if ( num === 1 ) {
		return resultArr;
	}
	for ( let i = 1; i < num - 1; i++ ) {
		resultArr.push( Number( ( resultArr[0] + i * step ).toPrecision( 2 ) ) );
	}
	resultArr.push( b );
	return resultArr;
};


/**
 * Given an array of numbers. Find the index of the second maximum element
 * @param {Number} arr
 */
const taskTen = ( arr ) => {
	isArray( arr );
	let max1 = -Infinity;
	let max2 = -Infinity;
	arr.forEach( ( element ) => {
		if ( element > max1 ) {
			max2 = max1;
			max1 = element;
		} else if ( element > max2 ) {
			max2 = element;
		}
	} );
	return arr.indexOf( max2 );
};


/**
 * Given an array of numbers, padding amount and repeat count. Pad the array in the following way:
 * the padding amount specifies how many elements should be taken from the array edges, the repeat
 * amount specifies how many times the pad should be repeated. Also, you should check that
 * padding amount <= length of array.
 * @param {Array} arr
 * @param {number} padAmount
 * @param {number} repeat
 */
const taskEleven = ( arr, padAmount, repeat ) => {
	isArray( arr );
	isNumber( padAmount, repeat );
	if ( padAmount > arr.length ) {
		return 'Invalid padding amount';
	}

	const front = arr.slice( 0, padAmount );
	const back = arr.slice( arr.length - padAmount );
	for ( let i = 0; i < repeat; i++ ) {
		arr.unshift( ...front );
		arr.push( ...back );
	}
	return arr;
};


module.exports = {
	taskOne, taskTwo, taskThree, taskFour, taskNine, taskTen, taskEleven,
};
