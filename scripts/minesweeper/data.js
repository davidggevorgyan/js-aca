function getRandomUniqueIntegersRange( min, max, length ) {
	if ( max - min < length ) {
		throw new RangeError( 'Invalid input data' );
	}
	const result = new Set();
	while ( result.size < length ) {
		result.add( Math.trunc( Math.random() * ( max - min ) ) + min );
	}
	return Array.from( result );
}

function lookAround( array, centerX, centerY ) {
	let sum = 0;
	const width = array[0].length;
	const height = array.length;
	for ( let y = -1; y <= 1; y++ ) {
		for ( let x = -1; x <= 1; x++ ) {
			const curY = centerY + y;
			const curX = centerX + x;
			if ( curY >= 0 && curX >= 0 && curX < width && curY < height ) {
				if ( array[centerY + y][centerX + x] === -1 ) {
					sum += 1;
				}
			}
		}
	}
	return sum;
}

function putNumbers( array ) {
	for ( let y = 0; y < array.length; y++ ) {
		for ( let x = 0; x < array[0].length; x++ ) {
			if ( array[y][x] !== -1 ) {
				// eslint-disable-next-line no-param-reassign
				array[y][x] = lookAround( array, x, y );
			}
		}
	}
}

function createEmptyField( width, height ) {
	const field = [];
	for ( let index = 0; index < height; index++ ) {
		field.push( new Array( width ) );
		for ( let subIndex = 0; subIndex < height; subIndex++ ) {
			field[index][subIndex] = 0;
		}
	}
	return field;
}

function putMines( array, minesCount ) {
	const mines = getRandomUniqueIntegersRange( 0, array.length * array[0].length, minesCount );
	mines.forEach( ( element ) => {
		// eslint-disable-next-line no-param-reassign
		array[Math.trunc( element / array[0].length )][Math.trunc( element % array[0].length )] = -1;
	} );
}

export default function createFieldWithData( gameSettings ) {
	const field = createEmptyField( gameSettings.width, gameSettings.height );
	putMines( field, gameSettings.mines );
	putNumbers( field );
	// eslint-disable-next-line no-param-reassign
	gameSettings.fieldData = field;
	return field;
}
