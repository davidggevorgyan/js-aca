import Field from './field.js';
import Figure from './figure.js';

const field = new Field( 20, 10 );
field.renderField();

let figure = Figure.create();
figure.renderFigure();

function move() {
	if ( !field.hasDownCollisions( figure ) ) {
		figure.down();
	} else {
		field.fullRowCleanup();
		const nextFigure = Figure.create();
		nextFigure.renderFigure();
		field.isGameOver( nextFigure );
		figure = nextFigure;
	}
}

document.onkeydown = function keyListener( e ) {
	switch ( e.which ) {
	case 37: // left
		if ( !field.hasLeftCollisions( figure ) ) {
			figure.left();
		}
		break;
	case 38: // up
		if ( !field.hasRotateCollisions( figure ) ) {
			figure.rotate();
		}
		break;
	case 39: // right
		if ( !field.hasRightCollisions( figure ) ) {
			figure.right();
		}
		break;
	case 40: // down
		move();
		break;
	default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
};

document.querySelector( '#main' ).setAttribute( 'timerID', setInterval( move, 500 ) );
