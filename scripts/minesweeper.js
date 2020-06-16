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

function createFieldWithData( gameSettings ) {
	const field = createEmptyField( gameSettings.width, gameSettings.height );
	putMines( field, gameSettings.mines );
	putNumbers( field );
	// eslint-disable-next-line no-param-reassign
	gameSettings.fieldData = field;
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

function endGame( gameSettings ) {
	document.querySelector( '.field' ).style.pointerEvents = 'none';
	document.querySelector( '.new-game' ).innerText = String.fromCodePoint( '0x1F635' );
	document.querySelector( '.new-game' ).classList.add( 'busted' );
	for ( let yIndex = 0; yIndex < gameSettings.height; yIndex++ ) {
		for ( let xIndex = 0; xIndex < gameSettings.width; xIndex++ ) {
			if ( gameSettings.fieldData[yIndex][xIndex] === -1 ) {
				document.querySelector( `#cell-${ yIndex }-${ xIndex } ` ).style.transition = 'background-color 1s ease-out';
				document.querySelector( `#cell-${ yIndex }-${ xIndex } ` ).style.backgroundColor = 'red';
			}
		}
	}
}

function winGame() {
	document.querySelector( '.field' ).style.pointerEvents = 'none';
	document.querySelector( '.new-game' ).innerText = String.fromCodePoint( '0x1F60E' );
	document.querySelector( '.new-game' ).classList.add( 'winner' );
}

function openCell( gameSettings, x, y ) {
	const cell = document.querySelector( `#cell-${ y }-${ x }` );
	if ( gameSettings.fieldData[y][x] === -1 ) {
		cell.innerText = String.fromCodePoint( '0x1F4A3' );
		cell.style.backgroundColor = 'red';
		endGame( gameSettings );
	} else if ( gameSettings.fieldData[y][x] === 0 ) {
		cell.setAttribute( 'open', true );
		cell.style.backgroundColor = 'silver';
		cell.innerText = ' ';
		for ( let yIndex = -1; yIndex <= 1; yIndex++ ) {
			for ( let xIndex = -1; xIndex <= 1; xIndex++ ) {
				const curY = y + yIndex;
				const curX = x + xIndex;
				if ( curY >= 0 && curX >= 0 && curX < gameSettings.width && curY < gameSettings.height && !document.querySelector( `#cell-${ curY }-${ curX }` ).hasAttribute( 'open' ) ) {
					openCell( gameSettings, curX, curY );
				}
			}
		}
	} else {
		cell.setAttribute( 'open', true );
		cell.style.backgroundColor = 'silver';
		cell.innerText = gameSettings.fieldData[y][x];
	}

	if ( document.querySelectorAll( '[open]' ).length >= gameSettings.width * gameSettings.height - gameSettings.mines ) {
		winGame();
	}
}

function createField( gameSettings ) {
	const field = document.querySelector( '.field' );

	createFieldWithData( gameSettings );
	for ( let hIndex = 0; hIndex < gameSettings.height; hIndex++ ) {
		for ( let wIndex = 0; wIndex < gameSettings.width; wIndex++ ) {
			const cell = document.createElement( 'div' );
			cell.setAttribute( 'class', 'flex-cell' );
			cell.setAttribute( 'id', `cell-${ hIndex }-${ wIndex }` );
			document.querySelector( '.field' ).append( cell );
		}
	}
	field.addEventListener( 'click', ( ev ) => {
		if ( ev.target.id.includes( 'cell' ) ) {
			const coordinates = ev.target.id.split( '-' );
			const x = +coordinates.pop();
			const y = +coordinates.pop();
			openCell( gameSettings, x, y );
		}
	} );
	field.addEventListener( 'contextmenu', ( ev ) => {
		ev.preventDefault();
		const cell = ev.target;
		if ( !cell.hasAttribute( 'open' ) && cell.innerText === '' && ev.target.id.includes( 'cell' ) ) {
			cell.innerText = String.fromCodePoint( '0x1F4CD' );
		} else if ( !cell.hasAttribute( 'open' ) && cell.innerText !== '' && ev.target.id.includes( 'cell' ) ) {
			cell.innerText = '';
		}
		return false;
	} );
}

function newGame( myParam ) {
	const gameSettings = {};
	switch ( myParam ) {
	case 'beginner':
		gameSettings.nextLevel = 'intermediate';
		gameSettings.width = 10;
		gameSettings.height = 10;
		gameSettings.mines = 10;
		break;
	case 'intermediate':
		gameSettings.nextLevel = 'expert';
		gameSettings.width = 16;
		gameSettings.height = 16;
		gameSettings.mines = 40;
		break;
	case 'expert':
		gameSettings.nextLevel = 'beginner';
		gameSettings.level = 2;
		gameSettings.width = 30;
		gameSettings.height = 16;
		gameSettings.mines = 99;
		break;
	default:
		gameSettings.nextLevel = 'intermediate';
		gameSettings.width = 10;
		gameSettings.height = 10;
		gameSettings.mines = 10;
	}
	createField( gameSettings );
	const newGameButton = document.querySelector( '.new-game' );
	const settings = document.querySelector( '.settings' );
	const main = document.querySelector( '.main' );
	main.style.width = `${ ( gameSettings.width ) * 36 }px`;

	newGameButton.addEventListener( 'click', () => {
		const oldField = document.querySelector( '.field' );

		const newField = document.createElement( 'div' );
		newField.setAttribute( 'class', 'field' );

		main.replaceChild( newField, oldField );

		newGameButton.innerText = String.fromCodePoint( '0x1F603' );
		newGameButton.classList.remove( 'busted' );
		newGameButton.classList.remove( 'winner' );

		const timer = document.querySelector( '.timer' );
		clearInterval( timer.getAttribute( 'timerID' ) );

		createField( gameSettings );
		timerScheduler();
	} );

	settings.setAttribute( 'onclick', `location.href='?level=${ gameSettings.nextLevel }';` );

}

const urlParams = new URLSearchParams( window.location.search );
const myParam = urlParams.get( 'level' );

newGame( myParam );
timerScheduler();
