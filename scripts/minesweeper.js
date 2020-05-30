
// -------------------- data.js --------------------
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

function createEmptyField( size ) {
	const field = [];
	for ( let index = 0; index < size; index++ ) {
		field.push( new Array( 10 ) );
		for ( let subIndex = 0; subIndex < size; subIndex++ ) {
			field[index][subIndex] = 0;
		}
	}
	return field;
}

function putMines( array ) {
	const mines = getRandomUniqueIntegersRange( 0, array.length ** 2, array.length );
	mines.forEach( ( element ) => {
		// eslint-disable-next-line no-param-reassign
		array[Math.trunc( element / 10 )][Math.trunc( element % 10 )] = -1;
	} );
}

function createFieldWithData( size ) {
	const field = createEmptyField( size );
	putMines( field );
	putNumbers( field );
	return field;
}

// -------------------- timers.js --------------------

function timerScheduler() {
	// eslint-disable-next-line no-use-before-define
	const timerID = setInterval( startTimer, 1000 );
	const timer = document.querySelector( '.timer' );
	timer.setAttribute( 'timerID', timerID );
	const record = document.querySelector( '.record' );
	timer.innerText = 0;


	function startTimer() {
		if ( document.querySelector( '.new-game.winner' ) !== null ) {
			clearInterval( timer.getAttribute( 'timerID' ) );
			if ( timer.innerText < record.innerText ) {
				record.innerText = timer.innerText;
			}
		} else if ( document.querySelector( '.new-game.busted' ) !== null ) {
			clearInterval( timer.getAttribute( 'timerID' ) );
		} else if ( timer.innerText < 999 ) {
			timer.innerText = Number( timer.innerText ) + 1;
		}
	}

}


// -------------------- main.js --------------------

function endGame() {
	document.querySelector( '.field' ).style.pointerEvents = 'none';
	document.querySelector( '.new-game' ).innerText = String.fromCodePoint( '0x1F635' );
	document.querySelector( '.new-game' ).classList.add( 'busted' );
}

function winGame() {
	document.querySelector( '.field' ).style.pointerEvents = 'none';
	document.querySelector( '.new-game' ).innerText = String.fromCodePoint( '0x1F60E' );
	document.querySelector( '.new-game' ).classList.add( 'winner' );
}

function openCell( fieldData, index ) {
	const cell = document.querySelector( `#cell-${ index }` );
	const centerY = Math.trunc( index / 10 );
	const centerX = index % 10;
	const width = 10;
	const height = 10;
	if ( fieldData[centerY][centerX] === -1 ) {
		cell.innerText = String.fromCodePoint( '0x1F4A3' );
		cell.style.backgroundColor = 'red';
		endGame();
	} else if ( fieldData[centerY][centerX] === 0 ) {
		cell.setAttribute( 'open', true );
		cell.style.backgroundColor = 'silver';
		cell.innerText = ' ';
		for ( let y = -1; y <= 1; y++ ) {
			for ( let x = -1; x <= 1; x++ ) {
				const curY = centerY + y;
				const curX = centerX + x;
				if ( curY >= 0 && curX >= 0 && curX < width && curY < height && document.querySelector( `#cell-${ curY * 10 + curX }` ).attributes.open === undefined ) {
					openCell( fieldData, curY * 10 + curX );
				}
			}
		}
	} else {
		cell.setAttribute( 'open', true );
		cell.style.backgroundColor = 'silver';
		cell.innerText = fieldData[Math.trunc( index / 10 )][index % 10];
	}

	if ( document.querySelectorAll( '[open]' ).length >= 90 ) {
		winGame();
	}
}


function createField( fieldSize = 10 ) {
	const fieldData = createFieldWithData( fieldSize );
	for ( let index = 0; index < fieldSize ** 2; index++ ) {
		const cell = document.createElement( 'div' );
		cell.setAttribute( 'class', 'flex-cell' );
		cell.setAttribute( 'id', `cell-${ index }` );
		cell.addEventListener( 'click', () => openCell( fieldData, index ) );
		cell.addEventListener( 'contextmenu', ( ev ) => {
			ev.preventDefault();
			if ( !cell.hasAttribute( 'open' ) && cell.innerText === '' ) {
				cell.innerText = String.fromCodePoint( '0x1F4CD' );
			} else if ( !cell.hasAttribute( 'open' ) && cell.innerText !== '' ) {
				cell.innerText = '';
			}
			return false;
		}, false );
		document.querySelector( '.field' ).append( cell );
	}
}

function newGame() {
	const newGameButton = document.querySelector( '.new-game' );
	newGameButton.addEventListener( 'click', () => {

		document.querySelector( '.field' ).innerHTML = '';
		document.querySelector( '.field' ).style.pointerEvents = null;

		newGameButton.innerText = String.fromCodePoint( '0x1F603' );
		newGameButton.classList.remove( 'busted' );
		newGameButton.classList.remove( 'winner' );

		const timer = document.querySelector( '.timer' );
		clearInterval( timer.getAttribute( 'timerID' ) );

		createField();
		timerScheduler();
	} );
}


createField();
newGame();
timerScheduler();
