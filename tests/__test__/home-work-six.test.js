const {
	taskOne, taskTwo, taskThree, taskFour,
} = require( '../../src/home-work-six' );

// -------------------------------------------- Task 1 --------------------------------------------
test( 'task1: should return true for ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )', () => {
	expect( taskOne( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) ).toBe( true );
} );

test( 'task1: should return false for ( [1, 2, 3, 4, 5, 6, 7, 1, 2, 3] )', () => {
	expect( taskOne( [1, 2, 3, 4, 5, 6, 7, 1, 2, 3] ) ).toBe( false );
} );


// -------------------------------------------- Task 2 --------------------------------------------
test( 'task2: should return 20 for ( [2, 4, 5, 16] )', () => {
	expect( taskTwo( [2, 4, 5, 16] ) ).toBe( 20 );
} );

// -------------------------------------------- Task 3 --------------------------------------------
test( 'task3: should return true for ( Dog ma I am god )', () => {
	expect( taskThree( 'Dog ma I am god' ) ).toBe( true );
} );

test( 'task3: should return true for ( god poop dog )', () => {
	expect( taskThree( 'god poop dog' ) ).toBe( true );
} );

test( 'task3: should return true for ( a bad test )', () => {
	expect( taskThree( 'a bad test' ) ).toBe( false );
} );

// -------------------------------------------- Task 4 --------------------------------------------
test( 'task4: should return ["inlets"] for ( "listen", ["enlists", "google", "inlets", "banana"] )', () => {
	expect( taskFour( 'listen', ['enlists', 'google', 'inlets', 'banana'] ) ).toEqual( ['inlets'] );
} );

test( 'task4: should return ["licnep", "nilcpe"] for ( "pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"] )', () => {
	expect( taskFour( 'pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'] ) ).toEqual( ['licnep', 'nilcpe'] );
} );
