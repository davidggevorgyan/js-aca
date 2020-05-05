/**
 * Given an array. Write a recursive function that removes the first element
 * and returns the given array. (without using arr.unshift(),assign second
 * element to first, third element to second...)
 * @param {Array} arr
 */
function taskOne( arr, newArr = [] ) {
	if ( newArr.length === arr.length - 1 || arr.length === 0 ) {
		return newArr;
	}
	newArr.push( arr[newArr.length + 1] );
	return taskOne( arr, newArr );
}

/**
 * Given an object. Invert it (keys become values and values become keys).
 * If there is more than key for that given value create an array.
 * @param {Object} obj
 */
function taskTwo( obj ) {
	const result = {};
	// eslint-disable-next-line no-restricted-syntax
	for ( const key in obj ) {
		if ( result[obj[key]] === undefined ) {
			result[obj[key]] = key;
		} else if ( Array.isArray( result[obj[key]] ) ) {
			result[obj[key]].push( key );
		} else {
			result[obj[key]] = [result[obj[key]], key];
		}
	}
	return result;
}

/**
 * Given the list of readers
 * Output the books sorted by the percent in descending order which readStatus is true.
 */
function taskThree( arr ) {
	arr.sort( ( a, b ) => {
		if ( a.percent > b.percent ) {
			return -1;
		}
		if ( a.percent < b.percent ) {
			return 1;
		}
		return 0;
	} );
	return arr.filter( ( book ) => book.readStatus === true );
}

/**
 * Given an array and a number N. Write a recursive function that
 * rotates an array N places to the left.
 * @param {Array} arr
 * @param {Number} n
 */
function taskFour( arr, n ) {
	let nCopy = n;
	if ( nCopy === 0 ) {
		return arr;
	}
	if ( nCopy < 0 ) {
		nCopy += 1;
		arr.unshift( arr.pop() );
	}
	if ( n > 0 ) {
		nCopy -= 1;
		arr.push( arr.shift() );
	}
	return ( taskFour( arr, nCopy ) );

}

/**
 * Create a function that builds a tree like object given an array
 * with object which contains parent and id properties.
 * @param {Array} arr
 */
function taskFive( arr, result = {}, parent = null, keepOriginal = true ) {
	let arrClone = arr;
	if ( keepOriginal ) {
		arrClone = JSON.parse( JSON.stringify( arr ) );
	}
	let index = 0;
	while ( index < arrClone.length ) {
		if ( parent === arrClone[index].parent ) {
			const child = arrClone[index].id;
			arrClone.splice( index, 1 );
			index = -1;
			// eslint-disable-next-line no-param-reassign
			result[child] = {};
			taskFive( arrClone, result[child], child, false );
		}
		index += 1;
	}
	return result;
}

/**
 * Write a JavaScript function to get all possible subsets of given length of the given array.
 * Assume that all elements in the array are unique
 * @param {Array} arr
 * @param {Number} n
 */
function taskSix( arr, n ) {
	const result = [];
	for ( let i = 0; i < arr.length; i++ ) {
		if ( n === 1 ) {
			result.push( [arr[i]] );
		} else {
			const subRes = taskSix( arr.slice( i + 1, arr.length ), n - 1 );
			for ( let j = 0; j < subRes.length; j++ ) {
				const next = subRes[j];
				next.unshift( arr[i] );
				result.push( next );
			}
		}
	}
	return result;

}

/**
 * Create constructor function which instances would be objects with
 * already implemented method "map" (like Array.map) .
 */
function TaskSeven( one, two, three ) {
	this.one = one;
	this.two = two;
	this.three = three;


	this.map = function map( fn ) {
		const result = [];
		// eslint-disable-next-line no-restricted-syntax
		for ( const key in this ) {
			if ( typeof ( this[key] ) !== 'function' ) {
				result.push( fn( key, this[key] ) );
			}
		}
		const [cOne, cTwo, cThree] = result;
		return new TaskSeven( cOne, cTwo, cThree );
	};
}

module.exports = {
	taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, TaskSeven,
};
