export default function timerScheduler() {
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
