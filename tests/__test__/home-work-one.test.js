const {
	taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, taskSeven, taskEight, taskNine,
	taskTen, taskEleven, taskTwelve, taskThirteen, taskFourteen, taskFifteen, taskSeventeen,
	taskEighteen,
} = require( '../../src/home-work-one' );

// -------------------------------------------- Task 1 --------------------------------------------
test( 'task1: should return odd for 123', () => {
	expect( taskOne( 123 ) ).toBe( 'odd' );
} );

test( 'task1: should return even for 70', () => {
	expect( taskOne( 70 ) ).toBe( 'even' );
} );

test( 'task1: should throw exception for a string', () => {
	function incorrectDataType() {
		taskOne( 'string' );
	}
	expect( incorrectDataType ).toThrow( TypeError );
	expect( incorrectDataType ).toThrowError( 'Incorrect type of argument, expected to get number instead of string' );
} );

test( 'task1: should throw exception for an empty function call', () => {
	function incorrectDataType() {
		taskOne();
	}
	expect( incorrectDataType ).toThrow( TypeError );
	expect( incorrectDataType ).toThrowError( 'Incorrect type of argument, expected to get number instead of undefined' );
} );


// -------------------------------------------- Task 2 --------------------------------------------
test( 'task2: should return 0 for ( 3, 14 )', () => {
	expect( taskTwo( 3, 14 ) ).toBe( 0 );
} );

test( 'task2: should return 1 for ( 18, 2 )', () => {
	expect( taskTwo( 18, 2 ) ).toBe( 1 );
} );

test( 'task2: should return 1 for ( 7, 21 )', () => {
	expect( taskTwo( 7, 21 ) ).toBe( 1 );
} );


// -------------------------------------------- Task 3 --------------------------------------------
test( 'task3: should return 45 for ( 45, 90 )', () => {
	expect( taskThree( 45, 90 ) ).toBe( 45 );
} );

test( 'task3: should return 120 for ( 30, 30 )', () => {
	expect( taskThree( 30, 30 ) ).toBe( 120 );
} );

test( 'task3: should return 80 for ( 75, 25 )', () => {
	expect( taskThree( 75, 25 ) ).toBe( 80 );
} );

test( 'task3: should throw RangeError for ( 170, 10 )', () => {
	function invalidTriangle() {
		taskThree( 170, 10 );
	}
	expect( invalidTriangle ).toThrow( RangeError );
	expect( invalidTriangle ).toThrowError( 'The sum of arguments must be less than 180' );
} );


// -------------------------------------------- Task 4 --------------------------------------------
test( 'task4: should return 369 for ( 3 )', () => {
	expect( taskFour( 3 ) ).toBe( 369 );
} );

test( 'task4: should return 173451 for ( 17 )', () => {
	expect( taskFour( 17 ) ).toBe( 173451 );
} );


// -------------------------------------------- Task 5 --------------------------------------------
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


// -------------------------------------------- Task 6 --------------------------------------------
test( 'task6: should return 4.2 for ( 45, -12, 0, 3, -15 )', () => {
	expect( taskSix( 45, -12, 0, 3, -15 ) ).toBe( 4.2 );
} );

test( 'task6: should return -7.2 for ( 7, 52, -23, 9, -81 )', () => {
	expect( taskSix( 7, 52, -23, 9, -81 ) ).toBe( -7.2 );
} );


// -------------------------------------------- Task 7 --------------------------------------------
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


// -------------------------------------------- Task 8 --------------------------------------------
test( 'task8: should return baby for ( 8, "months" )', () => {
	expect( taskEight( 8, 'months' ) ).toBe( 'baby' );
} );

test( 'task8: should return adult for ( 45, "years" )', () => {
	expect( taskEight( 45, 'years' ) ).toBe( 'adult' );
} );

test( 'task8: should return toddler for ( 2, "years" )', () => {
	expect( taskEight( 2, 'years' ) ).toBe( 'toddler' );
} );

test( 'task8: should return teenager for ( 16, "years" )', () => {
	expect( taskEight( 16, 'years' ) ).toBe( 'teenager' );
} );

test( 'task8: should return child for ( 3, "years" )', () => {
	expect( taskEight( 3, 'years' ) ).toBe( 'child' );
} );

test( 'task8: should throw Error if entered more than 12 months', () => {
	function incorrectData() {
		taskEight( 35, 'months' );
	}
	expect( incorrectData ).toThrow( RangeError );
	expect( incorrectData ).toThrowError( 'Age in months should not exceed 12 months' );
} );

test( 'task8: should throw Error if entered invalid measurement', () => {
	function incorrectData() {
		taskEight( 35, 40 );
	}
	expect( incorrectData ).toThrow( TypeError );
	expect( incorrectData ).toThrowError( 'Incorrect type of argument, expected to get string instead of number' );
} );

test( 'task8: should throw Error if entered invalid data', () => {
	function incorrectData() {
		taskEight( 35, 'days' );
	}
	expect( incorrectData ).toThrow( SyntaxError );
	expect( incorrectData ).toThrowError( 'Invalid data passed to the function' );
} );


// -------------------------------------------- Task 9 --------------------------------------------
test( 'task9: should return 26, 45, 78 for ( 45 , 26, 78 )', () => {
	expect( taskNine( 45, 26, 78 ) ).toBe( '26, 45, 78' );
} );

test( 'task9: should return -456, -23, 0 for ( -23, -456, 0 )', () => {
	expect( taskNine( -23, -456, 0 ) ).toBe( '-456, -23, 0' );
} );


// -------------------------------------------- Task 10 --------------------------------------------
test( 'task10: should return Passed for ( 65, 70, 60 )', () => {
	expect( taskTen( 65, 70, 60 ) ).toBe( 'Passed' );
} );

test( 'task10: should return Passed for ( 10, 85, 75 )', () => {
	expect( taskTen( 10, 85, 75 ) ).toBe( 'Passed' );
} );

test( 'task10: should return Not passed for ( 35, 25, 40 )', () => {
	expect( taskTen( 35, 25, 40 ) ).toBe( 'Not passed' );
} );

test( 'task10: should return Not passed for ( 20, 40, 40 )', () => {
	expect( taskTen( 20, 40, 40 ) ).toBe( 'Not passed' );
} );


// -------------------------------------------- Task 11 --------------------------------------------
test( 'task11: should return unsigned for ( -14, 5, 0 )', () => {
	expect( taskEleven( -14, 5, 0 ) ).toBe( 'unsigned' );
} );

test( 'task11: should return + for ( -8, 9, -6 )', () => {
	expect( taskEleven( -8, 9, -6 ) ).toBe( '+' );
} );

test( 'task11: should return + for ( -8, 9, -6 )', () => {
	expect( taskEleven( 8, -9, -6 ) ).toBe( '+' );
} );

test( 'task11: should return - for ( 4, 19, -2 )', () => {
	expect( taskEleven( 4, 19, -2 ) ).toBe( '-' );
} );


// -------------------------------------------- Task 12 --------------------------------------------
test( 'task12: should return "Solution is -1" for ( 1, 2, 1 )', () => {
	expect( taskTwelve( 1, 2, 1 ) ).toBe( 'Solution is -1' );
} );

test( 'task12: should return "Enter valid constants" for ( 0, 4, -5 )', () => {
	expect( taskTwelve( 0, 4, -5 ) ).toBe( 'Enter valid constants' );
} );

test( 'task12: should return "Solution does not exists" for ( 3, -8, 12 )', () => {
	expect( taskTwelve( 3, -8, 12 ) ).toBe( 'Solution does not exists' );
} );

test( 'task12: should return "Solutions are 0.6 and 2" for ( 5, -13, 6 )', () => {
	expect( taskTwelve( 5, -13, 6 ) ).toBe( 'Solutions are 0.6 and 2' );
} );


// -------------------------------------------- Task 13 --------------------------------------------
test( 'task13: should return "i = 0, j = 1" for ( 21 )', () => {
	expect( taskThirteen( 21 ) ).toBe( 'i = 0, j = 1' );
} );

test( 'task13: should return "i = 1, j = 0" for ( 8 )', () => {
	expect( taskThirteen( 8 ) ).toBe( 'i = 1, j = 0' );
} );


// -------------------------------------------- Task 14 --------------------------------------------
test( 'task14: should return "No" for ( 5, 2463 )', () => {
	expect( taskFourteen( 5, 2463 ) ).toBe( 'No' );
} );

test( 'task14: should return "No" for ( 4, 6 )', () => {
	expect( taskFourteen( 4, 6 ) ).toBe( 'No' );
} );

test( 'task14: should return "Yes" for ( 8, 45689 )', () => {
	expect( taskFourteen( 8, 45689 ) ).toBe( 'Yes' );
} );


// -------------------------------------------- Task 15 --------------------------------------------
test( 'task15: should return 2 for ( 2 )', () => {
	expect( taskFifteen( 2 ) ).toBe( 2 );
} );

test( 'task15: should return 31 for ( 13 )', () => {
	expect( taskFifteen( 13 ) ).toBe( 31 );
} );

test( 'task15: should return 695798 for ( 895796 )', () => {
	expect( taskFifteen( 895796 ) ).toBe( 695798 );
} );


// -------------------------------------------- Task 17 --------------------------------------------
test( 'task17: should return "Square of the triangle is 21" for ( "triangle", 6, 7 )', () => {
	expect( taskSeventeen( 'triangle', 6, 7 ) ).toBe( 'Square of the triangle is 21' );
} );

test( 'task17: should return "Square of the rectangle is 40" for ( "rectangle", 8, 5 )', () => {
	expect( taskSeventeen( 'rectangle', 8, 5 ) ).toBe( 'Square of the rectangle is 40' );
} );

test( 'task17: should return "Please enter only positives" for ( "triangle", 0, 5 )', () => {
	expect( taskSeventeen( 'triangle', 0, 5 ) ).toBe( 'Please enter only positives' );
} );

test( 'task17: should return "Please enter a valid figure name" for ( "circle", 1, 5 )', () => {
	expect( taskSeventeen( 'circle', 1, 5 ) ).toBe( 'Please enter a valid figure name' );
} );


// -------------------------------------------- Task 18 --------------------------------------------
test( 'task18: should return 5 for ( 5 )', () => {
	expect( taskEighteen( 5 ) ).toBe( 5 );
} );

test( 'task18: should return 4 for ( 152 )', () => {
	expect( taskEighteen( 152 ) ).toBe( 4 );
} );

test( 'task18: should return 6 for ( 4593653 )', () => {
	expect( taskEighteen( 4593653 ) ).toBe( 6 );
} );
