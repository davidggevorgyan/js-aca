const {
	taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, taskSeven,
} = require( '../../home-work-one' );

test( 'task1: should return odd for 123', () => {
	expect( taskOne( 123 ) ).toBe( 'odd' );
} );

test( 'task1: should return even for 70', () => {
	expect( taskOne( 70 ) ).toBe( 'even' );
} );

test( 'task1: should return NaN for a string', () => {
	function incorrectDataType() {
		taskOne( 'string' );
	}
	expect( incorrectDataType ).toThrow( TypeError );
	expect( incorrectDataType ).toThrowError( 'Incorrect type of argument, expected to get number instead of string' );
} );

test( 'task2: should return 0 for ( 3, 14 )', () => {
	expect( taskTwo( 3, 14 ) ).toBe( 0 );
} );

test( 'task2: should return 1 for ( 18, 2 )', () => {
	expect( taskTwo( 18, 2 ) ).toBe( 1 );
} );

test( 'task2: should return 1 for ( 7, 21 )', () => {
	expect( taskTwo( 7, 21 ) ).toBe( 1 );
} );

test( 'task2: should return NaN for ( "hello", "world" )', () => {
	expect( taskTwo( 'hello', 'world' ) ).toBe( NaN );
} );

test( 'task3: should return 45 for ( 45, 90 )', () => {
	expect( taskThree( 45, 90 ) ).toBe( 45 );
} );

test( 'task3: should return 120 for ( 30, 30 )', () => {
	expect( taskThree( 30, 30 ) ).toBe( 120 );
} );

test( 'task3: should return 80 for ( 75, 25 )', () => {
	expect( taskThree( 75, 25 ) ).toBe( 80 );
} );

test( 'task3: should return NaN for ( "hello", "world" )', () => {
	expect( taskThree( 'hello', 'world' ) ).toBe( NaN );
} );

test( 'task3: should throw RangeError for ( 170, 10 )', () => {
	function invalidTriangle() {
		taskThree( 170, 10 );
	}
	expect( invalidTriangle ).toThrow( RangeError );
	expect( invalidTriangle ).toThrowError( 'The sum of arguments must be less than 180' );
} );

test( 'task4: should return 369 for ( 3 )', () => {
	expect( taskFour( 3 ) ).toBe( 369 );
} );

test( 'task4: should return 173451 for ( 17 )', () => {
	expect( taskFour( 17 ) ).toBe( 173451 );
} );

test( 'task5: should return 100200300 for ( 100 )', () => {
	expect( taskFour( 100 ) ).toBe( 100200300 );
} );

test( 'task5: should return 2100 for ( 1002 )', () => {
	expect( taskFive( 1002 ) ).toBe( 2100 );
} );

test( 'task5: should return 736 for ( 367 )', () => {
	expect( taskFive( 367 ) ).toBe( 736 );
} );

test( 'task5: should return 250 for ( 250 )', () => {
	expect( taskFive( 250 ) ).toBe( 250 );
} );

test( 'task5: should return 8 for ( 8 )', () => {
	expect( taskFive( 8 ) ).toBe( 8 );
} );

test( 'task6: should return 4.2 for ( 45, -12, 0, 3, -15 )', () => {
	expect( taskSix( 45, -12, 0, 3, -15 ) ).toBe( 4.2 );
} );

test( 'task6: should return -7.2 for ( 7, 52, -23, 9, -81 )', () => {
	expect( taskSix( 7, 52, -23, 9, -81 ) ).toBe( -7.2 );
} );

test( 'task7: should return "21 is a multiple of 3 and 7." for ( 21 )', () => {
	expect( taskSeven( 21 ) ).toBe( '21 is a multiple of 3 and 7.' );
} );

test( 'task7: should return "35 is a multiple of 5 and 7." for ( 35 )', () => {
	expect( taskSeven( 35 ) ).toBe( '35 is a multiple of 5 and 7.' );
} );

test( 'task7: should return "13 is not a multiple of 3, 5 or 7." for ( 13 )', () => {
	expect( taskSeven( 13 ) ).toBe( '13 is not a multiple of 3, 5 or 7.' );
} );

test( 'task7: should return "420 is a multiple of 3, 5 and 7." for ( 420 )', () => {
	expect( taskSeven( 420 ) ).toBe( '420 is a multiple of 3, 5 and 7.' );
} );

test( 'task7: should return "24 is a multiple of 3." for ( 24 )', () => {
	expect( taskSeven( 24 ) ).toBe( '24 is a multiple of 3.' );
} );
