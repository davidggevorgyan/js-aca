export default class Figure {

	static #types = [
		[
			[1, 1],
			[1, 1],
		],
		[
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 0],

		],
		[
			[1, 0, 0],
			[1, 1, 1],
			[0, 0, 0],
		],
		[
			[1, 0, 0],
			[1, 1, 0],
			[0, 1, 0],
		],
		[
			[0, 1, 0],
			[1, 1, 0],
			[1, 0, 0],
		],
		[
			[0, 1, 0],
			[1, 1, 1],
			[0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],

	]

	static create() {
		return new Figure(
			Figure.#types[Math.floor( Math.random() * Math.floor( Figure.#types.length ) )],
		);
	}

	constructor( type ) {
		this.type = type;
		this.x = 4;
		this.y = 0;
	}

	down() {
		this.eraseFigure();
		this.y += 1;
		this.renderFigure();
	}

	left() {
		this.eraseFigure();
		this.x -= 1;
		this.renderFigure();
	}

	right() {
		this.eraseFigure();
		this.x += 1;
		this.renderFigure();
	}

	rotate() {
		this.eraseFigure();
		this.type = this.type.reverse();
		for ( let i = 0; i < this.type.length; i++ ) {
			for ( let j = 0; j < i; j++ ) {
				const temp = this.type[i][j];
				this.type[i][j] = this.type[j][i];
				this.type[j][i] = temp;
			}
		}
		this.renderFigure();
	}

	renderFigure() {
		for ( let yIndex = 0; yIndex < this.type.length; yIndex++ ) {
			for ( let xIndex = 0; xIndex < this.type[0].length; xIndex++ ) {
				if ( this.type[yIndex][xIndex] !== 0 ) {
					document.querySelector( `#cell-${ this.y + yIndex }-${ this.x + xIndex } ` ).style.backgroundColor = 'red';
				}
			}
		}
	}

	eraseFigure() {
		for ( let yIndex = 0; yIndex < this.type.length; yIndex++ ) {
			for ( let xIndex = 0; xIndex < this.type[0].length; xIndex++ ) {
				if ( this.type[yIndex][xIndex] !== 0 ) {
					document.querySelector( `#cell-${ this.y + yIndex }-${ this.x + xIndex } ` ).style = null;
				}
			}
		}
	}

}
