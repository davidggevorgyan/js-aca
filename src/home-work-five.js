/**
 * Given a sorted array and an element from that array. Find the index of that
element using binary search.
 * @param {Array} arr
 * @param {Number} val
 */
function taskOne( arr, val ) {
	let start = 0;
	let end = arr.length - 1;
	while ( start <= end ) {
		const mid = Math.trunc( ( start + end ) / 2 );
		if ( arr[mid] === val ) {
			return mid;
		}

		if ( val < arr[mid] ) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}


/**
 * Create a function that builds a tree like object given an array
 * with object which contains parent and id properties.
 * @param {Array} arr
 */
function taskTwo( arr, root = 'root', result = {} ) {
	for ( let index = 0; index < arr.length; index++ ) {
		if ( root === arr[index].id ) {
			// eslint-disable-next-line no-param-reassign
			result[root] = {};
			arr[index].children.forEach( ( element ) => {
				taskTwo( arr, element, result[root] );
			} );
		}
	}
	return result;

}

module.exports = {
	taskOne, taskTwo,
};
