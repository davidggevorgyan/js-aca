/**
 * Given an array. Determine whether it consists only from unique elements or not.
 * @param {Array} arr
 */
function taskOne( arr ) {
	return arr.length === new Set( arr ).size;
}


/**
 * Given an array of numbers. Find the sum of numbers’ quadratic which are even.
 * @param {Array} arr
 */
function taskTwo( arr ) {
	return arr.reduce( ( a, b ) => ( Math.sqrt( b ) % 2 === 0 ? a + b : a ), 0 );
}

/**
 * Check whether string is a palindrome, or not.
 * @param {String} str
 */
function taskThree( str ) {
	for ( let index = 0; index < str.length / 2; index++ ) {
		if ( str[index].toLowerCase() !== str[str.length - index - 1].toLowerCase() ) {
			return false;
		}
	}
	return true;
}

/**
 * Given a word and a list of possible anagrams, select the correct sub-list.
 * @param {String} str
 * @param {Array} array
 */
function taskFour( str, array ) {
	return array.filter( ( element ) => element.toLowerCase().split( '' ).sort().join() === str.toLowerCase().split( '' ).sort().join() );
}


module.exports = {
	taskOne, taskTwo, taskThree, taskFour,
};
