const {
	taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, TaskSeven,
} = require( '../../src/home-work-four' );

// -------------------------------------------- Task 1 --------------------------------------------
test( 'task1: should return [78, "n", 0, 1] for [6, 78, "n", 0, 1]', () => {
	expect( taskOne( [6, 78, 'n', 0, 1] ) ).toEqual( [78, 'n', 0, 1] );
} );

test( 'task1: should return [] for [5]', () => {
	expect( taskOne( [5] ) ).toEqual( [] );
} );

test( 'task1: should return [] for []', () => {
	expect( taskOne( [] ) ).toEqual( [] );
} );

// -------------------------------------------- Task 2 --------------------------------------------
test( 'task2: should return { 1: "a", 2: "b" } for { a: "1", b: "2" }', () => {
	expect( taskTwo( { a: '1', b: '2' } ) ).toEqual( { 1: 'a', 2: 'b' } );
} );

test( 'task2: should return { 1: "a", 2: ["b", "c"] } for { a: "1", b: "2", c: "2"  }', () => {
	expect( taskTwo( { a: '1', b: '2', c: '2' } ) ).toEqual( { 1: 'a', 2: ['b', 'c'] } );
} );

test( 'task2: should return  { 1: "a", 2: ["b", "c", "d"] for { a: "1", b: "2", c: "2", d: "2"  }', () => {
	expect( taskTwo( {
		a: '1', b: '2', c: '2', d: '2',
	} ) )
		.toEqual( { 1: 'a', 2: ['b', 'c', 'd'] } );
} );


// -------------------------------------------- Task 3 --------------------------------------------
test( 'task3: should return sorted and filtered array', () => {
	const arr = [
		{ book: 'Catcher in the Rye', readStatus: true, percent: 40 },
		{ book: 'Animal Farm', readStatus: true, percent: 20 },
		{ book: 'Solaris', readStatus: false, percent: 90 },
		{ book: 'The Fall', readStatus: true, percent: 50 },
		{ book: 'White Nights', readStatus: false, percent: 50 },
		{ book: 'After Dark', readStatus: true, percent: 70 },
	];
	const result = [
		{ book: 'After Dark', readStatus: true, percent: 70 },
		{ book: 'The Fall', readStatus: true, percent: 50 },
		{ book: 'Catcher in the Rye', readStatus: true, percent: 40 },
		{ book: 'Animal Farm', readStatus: true, percent: 20 },
	];
	expect( taskThree( arr ) ).toEqual( result );
} );

// -------------------------------------------- Task 4 --------------------------------------------
test( 'task4: should return ["d", "e", "f", "g", "h", "a", "b", "c"] for ["a", "b", "c", "d", "e", "f", "g", "h"] 3', () => {
	expect( taskFour( ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3 ) ).toEqual( ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c'] );
} );

test( 'task4: should return ["g", "h", "a", "b", "c", "d", "e", "f"] for ["a", "b", "c", "d", "e", "f", "g", "h"] -2', () => {
	expect( taskFour( ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2 ) ).toEqual( ['g', 'h', 'a', 'b', 'c', 'd', 'e', 'f'] );
} );

// -------------------------------------------- Task 5 --------------------------------------------
test( 'task5: should return tree like object', () => {
	const arr = [
		{ parent: null, id: 0 },
		{ parent: 0, id: 1 },
		{ parent: 0, id: 2 },
		{ parent: 1, id: 3 },
		{ parent: 1, id: 4 },
		{ parent: 2, id: 5 },
		{ parent: 4, id: 6 },
	];
	const result = {
		0: {
			1: {
				3: {},
				4: {
					6: {},
				},
			},
			2: {
				5: {},
			},
		},
	};
	expect( taskFive( arr ) ).toEqual( result );
} );

test( 'task5: should return {{}} for [{}] ', () => {
	const arr = [
		{ parent: null, id: 0 },
	];
	const result = {
		0: {},
	};
	expect( taskFive( arr ) ).toEqual( result );
} );

test( 'task5: should return {} for [] ', () => {
	const arr = [];
	const result = {};
	expect( taskFive( arr ) ).toEqual( result );
} );
// -------------------------------------------- Task 6 --------------------------------------------
// test( 'task6: should return [ [1, 2],  [1, 3],  [1, 4],  [2, 3],  [2, 4],  [3, 4] ] for [1, 2, 3, 4], 2 ', () => {
// 	expect( taskSix( [1, 2, 3, 4], 2 ) ).toEqual( [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] );
// } );

// test( 'task6: should return [ [1, 2, 3],  [1, 2, 4],  [1, 3, 4],  [2, 3, 4] ] for [1, 2, 3, 4], 3 ', () => {
// 	expect( taskSix( [1, 2, 3, 4], 3 ) ).toEqual( [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]] );
// } );

test( 'task6: should return valid result= for [1, 2, 3, 4, 5], 3 ', () => {
	const output = [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5],
		[1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]];
	expect( taskSix( [1, 2, 3, 4, 5], 3 ) ).toEqual( output );
} );

// -------------------------------------------- Task 7 --------------------------------------------
test( 'task7: should return ( 1, 2, 3 ) for (1, 4, 9).map(Math.sqrt)', () => {
	const origin = new TaskSeven( 1, 4, 9 );
	const result = origin.map( ( key, value ) => Math.sqrt( value ) );
	expect( result.one ).toBe( 1 );
	expect( result.two ).toBe( 2 );
	expect( result.three ).toBe( 3 );
} );

test( 'task7: should return ( ONE, TWO, THREE ) for ( 1, 2, 3 ).map()', () => {
	const origin = new TaskSeven( 1, 2, 3 );
	const result = origin.map( ( key ) => key.toUpperCase() );
	expect( result.one ).toBe( 'ONE' );
	expect( result.two ).toBe( 'TWO' );
	expect( result.three ).toBe( 'THREE' );
} );

test( 'task7: should return ( "Hello2", 125, 2 ) for ( "Hello", 123 , false ).map()', () => {
	const origin = new TaskSeven( 'Hello', 123, false );
	const result = origin.map( ( key, value ) => value + 2 );
	expect( result.one ).toBe( 'Hello2' );
	expect( result.two ).toBe( 125 );
	expect( result.three ).toBe( 2 );
} );
