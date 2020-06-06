const images = [
	'./assets/cd/cd-1.jpg',
	'./assets/cd/cd-2.jpg',
	'./assets/cd/cd-3.jpg',
	'./assets/cd/cd-4.jpg',
	'./assets/cd/cd-5.jpg',
	'./assets/cd/cd-6.jpg',
	'./assets/cd/cd-7.png',
	'./assets/cd/cd-8.jpg',
	'./assets/cd/cd-9.png',
	'./assets/cd/cd-10.jpg',
	'./assets/cd/cd-11.jpg',
	'./assets/cd/cd-12.jpg',
];
let position = 0;


function changeImage( index ) {
	document.querySelector( '.main' ).style.backgroundImage = `url("${ images[index] }"`;
}

function updatePositionBar( index = 0 ) {
	let result = '';
	for ( let i = 0; i < images.length; i++ ) {
		if ( i === index ) {
			result += String.fromCodePoint( '0x2022' );
		} else {
			result += '.';
		}
	}
	document.querySelector( '.position' ).innerText = result;
}

function next() {
	if ( position >= images.length - 1 ) {
		position = 0;
	} else {
		position += 1;
	}
	changeImage( position );
	updatePositionBar( position );
}

function nextListener() {
	document.querySelector( '.right-button' ).addEventListener( 'click', next );
}


function previous() {
	if ( position <= 0 ) {
		position = images.length - 1;
	} else {
		position -= 1;
	}
	changeImage( position );
	updatePositionBar( position );
}


function previousListener() {
	document.querySelector( '.left-button' ).addEventListener( 'click', previous );
}

function playPause() {
	const playButton = document.querySelector( '.play-button' );
	playButton.addEventListener( 'click', () => {
		if ( playButton.getAttribute( 'timer' ) ) {
			clearInterval( playButton.getAttribute( 'timer' ) );
			playButton.removeAttribute( 'timer' );
			playButton.innerText = String.fromCodePoint( '0x23EF' );
		} else {
			playButton.setAttribute( 'timer', setInterval( next, 1000 ) );
			playButton.innerText = String.fromCodePoint( '0x23F8' );
		}
	} );
}


function main() {
	nextListener();
	previousListener();
	updatePositionBar();
	playPause();
}

main();
