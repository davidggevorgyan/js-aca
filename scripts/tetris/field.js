export default class Field {

	constructor( height, width ) {
		this.height = height;
		this.width = width;
		this.fieldData = this.createField();
	}

	createField() {
		const fieldData = [];
		for ( let i = 0; i < this.height; i++ ) {
			fieldData.push( [] );
			for ( let j = 0; j < this.width; j++ ) {
				fieldData[i][j] = 0;
			}
		}
		return fieldData;
	}

	renderField() {
		const field = document.querySelector( '#field' );
		while ( field.firstChild ) {
			field.removeChild( field.firstChild );
		}
		for ( let y = 0; y < this.height; y++ ) {
			for ( let x = 0; x < this.width; x++ ) {
				const cell = document.createElement( 'div' );
				cell.setAttribute( 'class', 'flex-cell' );
				cell.setAttribute( 'id', `cell-${ y }-${ x }` );
				if ( this.fieldData[y][x] === 1 ) {
					cell.style.backgroundColor = 'red';
				}
				field.append( cell );
			}
		}
	}

	mergeFieldAndFigure( figure ) {
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				if ( figure.type[y][x] === 1 ) {
				// eslint-disable-next-line no-param-reassign
					this.fieldData[figure.y + y][figure.x + x] = figure.type[y][x];
				}
			}
		}
	}

	hasLeftCollisions( figure ) {
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				if ( figure.type[y][x] === 1 && this.fieldData[0][figure.x + x - 1] === undefined ) {
					return true;
				}
				if ( figure.type[y][x] === 1 && this.fieldData[figure.y + y][figure.x + x - 1] === 1 ) {
					return true;
				}
			}
		}
		return false;
	}

	hasRightCollisions( figure ) {
		for ( let x = figure.type[0].length; x >= 0; x-- ) {
			for ( let y = 0; y < figure.type.length; y++ ) {
				if ( figure.type[y][x] === 1 && this.fieldData[0][figure.x + x + 1] === undefined ) {
					return true;
				}
				if ( figure.type[y][x] === 1 && this.fieldData[figure.y + y][figure.x + x + 1] === 1 ) {
					return true;
				}
			}
		}
		return false;
	}

	hasDownCollisions( figure ) {
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				if ( figure.type[y][x] === 1 && figure.y + y >= this.fieldData.length - 1 ) {
					this.mergeFieldAndFigure( figure, this.fieldData );
					return true;
				}
				if ( figure.type[y][x] === 1 && this.fieldData[figure.y + y + 1][figure.x + x] === 1 ) {
					this.mergeFieldAndFigure( figure, this.fieldData );
					return true;
				}
			}
		}
		return false;
	}

	hasRotateCollisions( figure ) {
		if ( figure.x < 0 ) {
			return true;
		}
		if ( figure.x + figure.type.length - 1 >= this.fieldData[0].length ) {
			return true;
		}
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				if ( this.fieldData[figure.y + y][figure.x + x] === 1 ) {
					return true;
				}
			}
		}
		return false;
	}

	fullRowCleanup() {
		this.fieldData.forEach( ( element, index ) => {
			if ( element.every( ( v ) => v === 1 ) ) {
				this.fieldData.splice( index, 1 );
				this.fieldData.unshift( Array( 10 ).fill( 0 ) );
				this.renderField( this.fieldData );
				document.querySelector( '#score' ).innerHTML = +document.querySelector( '#score' ).innerText + 100;
			}
		} );
	}

	isGameOver( figure ) {
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				if ( this.fieldData[figure.y + y][figure.x + x] === 1 ) {
					document.onkeydown = null;
					document.querySelector( 'body' ).style.backgroundColor = 'brown';
					document.querySelector( '#game-over' ).style.display = '';
					clearInterval( document.querySelector( '#main' ).getAttribute( 'timerID' ) );
					return true;
				}
			}
		}
		return false;
	}

}
