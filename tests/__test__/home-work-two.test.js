const {
	taskOne, taskTwo, taskThree, taskFour, taskNine, taskTen, taskEleven,
} = require( '../../src/home-work-two' );

// -------------------------------------------- Task 1 --------------------------------------------
test( 'task1: should return yes for 401', () => {
	expect( taskOne( 401 ) ).toBe( 'yes' );
} );

test( 'task1: should return no for 63', () => {
	expect( taskOne( 63 ) ).toBe( 'no' );
} );

test( 'task1: should return no for 0', () => {
	expect( taskOne( 0 ) ).toBe( 'no' );
} );

test( 'task1: should return no for 1', () => {
	expect( taskOne( 1 ) ).toBe( 'no' );
} );

test( 'task1: should return yes for 2', () => {
	expect( taskOne( 2 ) ).toBe( 'yes' );
} );

test( 'task1: should return yes for 3', () => {
	expect( taskOne( 3 ) ).toBe( 'yes' );
} );

test( 'task1: should return no for 4', () => {
	expect( taskOne( 4 ) ).toBe( 'no' );
} );

test( 'task1: should return no for -3', () => {
	expect( taskOne( -3 ) ).toBe( 'no' );
} );

test( 'task2: should return 0 for 0', () => {
	expect( taskTwo( 0 ) ).toBe( 0 );
} );


// -------------------------------------------- Task 2 --------------------------------------------
test( 'task2: should return 1 for 2', () => {
	expect( taskTwo( 2 ) ).toBe( 1 );
} );

test( 'task2: should return 55 for 10', () => {
	expect( taskTwo( 10 ) ).toBe( 55 );
} );

test( 'task2: should return 6765 for 20', () => {
	expect( taskTwo( 20 ) ).toBe( 6765 );
} );


// -------------------------------------------- Task 3 --------------------------------------------
test( 'task3: should return "0, 1, 1, 2, 3, 5" for 7', () => {
	expect( taskThree( 7 ) ).toEqual( [0, 1, 1, 2, 3, 5] );
} );

test( 'task3: should return "0, 1, 1, 2, 3, 5, 8, 13, 21, 34" for 45', () => {
	expect( taskThree( 45 ) ).toEqual( [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] );
} );

test( 'task3: should return "0" for 0', () => {
	expect( taskThree( 0 ) ).toEqual( [0] );
} );


// -------------------------------------------- Task 4 --------------------------------------------
test( 'task4: should return "Quotient is 2." for 1233', () => {
	expect( taskFour( 1233 ) ).toBe( 'Quotient is 2.' );
} );

test( 'task4: should return "Quotient is 1." for 5', () => {
	expect( taskFour( 5 ) ).toBe( 'Quotient is 1.' );
} );

test( 'task4: should return "Cannot calculate." for 0', () => {
	expect( taskFour( 0 ) ).toBe( 'Cannot calculate.' );
} );

test( 'task4: should return "Remainder is 2." for 455', () => {
	expect( taskFour( 455 ) ).toBe( 'Remainder is 2.' );
} );

test( 'task4: should return "Quotient is 1." for 3', () => {
	expect( taskFour( 3 ) ).toBe( 'Quotient is 1.' );
} );


// -------------------------------------------- Task 9 --------------------------------------------
test( 'task9: should return [1] for ( 1, 5, 1 )', () => {
	expect( taskNine( 1, 5, 1 ) ).toEqual( [1] );
} );

test( 'task9: should return [10, 55, 100] for ( 10, 100, 3 )', () => {
	expect( taskNine( 10, 100, 3 ) ).toEqual( [10, 55, 100] );
} );

test( 'task9: should return [1, 1.8, 2.6, 3.4, 4.2, 5] for ( 1, 5, 6 )', () => {
	expect( taskNine( 1, 5, 6 ) ).toEqual( [1, 1.8, 2.6, 3.4, 4.2, 5] );
} );

test( 'task9: should return [] for ( 1, 5, 0 )', () => {
	expect( taskNine( 1, 5, 0 ) ).toEqual( [] );
} );


// -------------------------------------------- Task 10 --------------------------------------------
test( 'task10: should return 4 for [23,  -98, 0, -456, 12, 8]', () => {
	expect( taskTen( [23, -98, 0, -456, 12, 8] ) ).toBe( 4 );
} );

test( 'task10: should return 2 for [-60, 2, 43, -18, 5, -19, 36, 7, 56]', () => {
	expect( taskTen( [-60, 2, 43, -18, 5, -19, 36, 7, 56] ) ).toBe( 2 );
} );

test( 'task10: should return 1 for [15, 10]', () => {
	expect( taskTen( [15, 10] ) ).toBe( 1 );
} );

test( 'task10: should return 0 for [10, 15]', () => {
	expect( taskTen( [10, 15] ) ).toBe( 0 );
} );

test( 'task10: should throw exception for a string', () => {
	function incorrectDataType() {
		taskTen( 'string' );
	}
	expect( incorrectDataType ).toThrow( TypeError );
	expect( incorrectDataType ).toThrowError( 'Incorrect type of argument, expected to get Array instead of string' );
} );


// -------------------------------------------- Task 11 --------------------------------------------
test( 'task11: should return [1, 1, 1, 1, 2, 3, 4, 4, 4, 4] for [1, 2, 3, 4], 1, 3', () => {
	expect( taskEleven( [1, 2, 3, 4], 1, 3 ) ).toEqual( [1, 1, 1, 1, 2, 3, 4, 4, 4, 4] );
} );

test( 'task11: should return [1, 2, 1, 2, 3, 4, 3, 4] for [1, 2, 3, 4], 2, 1', () => {
	expect( taskEleven( [1, 2, 3, 4], 2, 1 ) ).toEqual( [1, 2, 1, 2, 3, 4, 3, 4] );
} );

test( 'task11: should return [1, 1, 1, 1, 1, 1, 1] for [1], 1, 3', () => {
	expect( taskEleven( [1], 1, 3 ) ).toEqual( [1, 1, 1, 1, 1, 1, 1] );
} );

test( 'task11: should return "Invalid padding amount" for [1], 2, 3', () => {
	expect( taskEleven( [1], 2, 3 ) ).toEqual( 'Invalid padding amount' );
} );
