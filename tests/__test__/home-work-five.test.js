const {
	taskOne, taskTwo,
} = require( '../../src/home-work-five' );

// -------------------------------------------- Task 1 --------------------------------------------
test( 'task1: should return 0 for ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1 )', () => {
	expect( taskOne( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1 ) ).toBe( 0 );
} );

test( 'task1: should return 9 for ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10 )', () => {
	expect( taskOne( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10 ) ).toBe( 9 );
} );

test( 'task1: should return -1 for ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0 )', () => {
	expect( taskOne( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0 ) ).toBe( -1 );
} );

// -------------------------------------------- Task 2 --------------------------------------------
test( 'task2: should return tree like object', () => {
	const arr = [
		{ id: 'root', children: [1, 2] },
		{ id: 1, children: [3, 4] },
		{ id: 2, children: [5] },
		{ id: 3, children: [] },
		{ id: 4, children: [6] },
		{ id: 5, children: [] },
		{ id: 6, children: [] },
	];
	const result = {
		root: {
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
	expect( taskTwo( arr ) ).toEqual( result );
} );

test( 'task2: should return {{}} for [{}] ', () => {
	const arr = [
		{ id: 'root', children: [] },
	];
	const result = {
		root: {},
	};
	expect( taskTwo( arr ) ).toEqual( result );
} );

test( 'task2: should return {} for [] ', () => {
	const arr = [];
	const result = {};
	expect( taskTwo( arr ) ).toEqual( result );
} );

test( 'task2: should return tree like object', () => {
	const arr = [
		{ id: 'root', children: [1, 2, 3, 4, 5] },
		{ id: 1, children: [] },
		{ id: 2, children: [] },
		{ id: 3, children: [] },
		{ id: 4, children: [] },
		{ id: 5, children: [7, 9] },
		{ id: 7, children: [] },
		{ id: 9, children: [] },
	];
	const result = {
		root: {
			1: {},
			2: {},
			3: {},
			4: {},
			5: {
				7: {},
				9: {},
			},
		},
	};
	expect( taskTwo( arr ) ).toEqual( result );
} );
