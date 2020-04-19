const {
	taskOne, taskTwo, taskThree, taskFour, taskFive,
} = require( '../../src/home-work-three' );

// -------------------------------------------- Task 1 --------------------------------------------
test( 'task1: should return false for 4211133', () => {
	expect( taskOne( 4211133 ) ).toBe( false );
} );

test( 'task1: should return true for 7791', () => {
	expect( taskOne( 7791 ) ).toBe( true );
} );

test( 'task1: should return true for 5', () => {
	expect( taskOne( 5 ) ).toBe( true );
} );

test( 'task1: should return false for 555555555525', () => {
	expect( taskOne( 555555555525 ) ).toBe( false );
} );

test( 'task1: should return false for 52', () => {
	expect( taskOne( 52 ) ).toBe( false );
} );

test( 'task1: should return false for 25', () => {
	expect( taskOne( 25 ) ).toBe( false );
} );

// -------------------------------------------- Task 2 --------------------------------------------
test( 'task2: should return 0 for [56, -9, 87, -23, 0, -105, 55, 1]', () => {
	expect( taskTwo( [56, -9, 87, -23, 0, -105, 55, 1] ) ).toBe( 0 );
} );

test( 'task2: should return 5 for [45, -9, 15, 5, -78]', () => {
	expect( taskTwo( [45, -9, 15, 5, -78] ) ).toBe( 5 );
} );

test( 'task2: should return -1 for [-5, -9, -111, -1000, -7]', () => {
	expect( taskTwo( [-5, -9, -111, -1000, -7] ) ).toBe( -1 );
} );

// -------------------------------------------- Task 3 --------------------------------------------
test( 'task3: should return [] for 0', () => {
	expect( taskThree( 0 ) ).toEqual( [] );
} );

test( 'task3: should return [1] for 1', () => {
	expect( taskThree( 1 ) ).toEqual( [1] );
} );

test( 'task3: should return [1, 1] for 2', () => {
	expect( taskThree( 2 ) ).toEqual( [1, 1] );
} );

test( 'task3: should return [1, 1, 2] for 3', () => {
	expect( taskThree( 3 ) ).toEqual( [1, 1, 2] );
} );

test( 'task3: should return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] for 10', () => {
	expect( taskThree( 10 ) ).toEqual( [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] );
} );

// -------------------------------------------- Task 4 --------------------------------------------
test( 'task4: should return [1, 3, 4, 1, 2, 10] for [1, [3, 4, [1, 2]], 10]', () => {
	expect( taskFour( [1, [3, 4, [1, 2]], 10] ) ).toEqual( [1, 3, 4, 1, 2, 10] );
} );

test( 'task4: should return [14, 1, 3, 1, 0] for [14, [1, [[[3, []]], 1], 0]', () => {
	expect( taskFour( [14, [1, [[[3, []]], 1], 0]] ) ).toEqual( [14, 1, 3, 1, 0] );
} );

test( 'task4: should return [1, 2, 3] for [1, [2], [3]]', () => {
	expect( taskFour( [1, [2], [3]] ) ).toEqual( [1, 2, 3] );
} );
// -------------------------------------------- Task 5 --------------------------------------------
test( 'task5: should return 5 for 14', () => {
	expect( taskFive( 14 ) ).toEqual( 5 );
} );

test( 'task5: should return 2 for 29', () => {
	expect( taskFive( 29 ) ).toEqual( 2 );
} );

test( 'task5: should return 9 for 999999999999', () => {
	expect( taskFive( 999999999999 ) ).toEqual( 9 );
} );
