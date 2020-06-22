function showErrorBanner( error ) {
	document.querySelector( '.alert-text' ).innerText = error.message;
	document.querySelector( '.alert' ).style.visibility = 'visible';
}

function setBackground( ) {
	fetch( `https://picsum.photos/${ document.documentElement.clientWidth }/${ document.documentElement.clientHeight }` )
		.then( ( response ) => {
			const bgElement = document.querySelector( '.bg-lazy' );
			let preloaderImg = document.createElement( 'img' );
			preloaderImg.src = response.url;

			preloaderImg.addEventListener( 'load', ( ) => {
				bgElement.classList.remove( 'bg-loading' );
				bgElement.style.backgroundImage = `url(${ response.url })`;
				preloaderImg = null;
			} );
		} )
		.catch( ( e ) => {
			showErrorBanner( e );
		} );

}

function renderCurrentWeather( data ) {
	document.querySelector( '.now' ).style.visibility = 'visible';
	document.querySelector( '.city' ).innerText = data.name;
	document.querySelector( '.time' ).innerText = moment( data.dt * 1000 ).format( 'MMMM Do YYYY, H:mm' );
	document.querySelector( '.description' ).innerText = data.weather[0].description;
	document.querySelector( '.big-icon' ).src = `http://openweathermap.org/img/wn/${ data.weather[0].icon }@4x.png`;
	document.querySelector( '.big-value' ).innerText = `${ data.main.temp } `;

	document.querySelector( '.humidity .value' ).innerText = `${ data.main.humidity } %`;
	document.querySelector( '.pressure .value' ).innerText = `${ data.main.pressure } hPa`;
	document.querySelector( '.visibility .value' ).innerText = `${ data.visibility / 1000 } km`;
	document.querySelector( '.wind .value' ).innerText = `${ data.wind.speed } m/s`;
	document.querySelector( '.sunrise .value' ).innerText = moment( data.sys.sunrise * 1000 ).format( 'H:mm' );
	document.querySelector( '.sunset .value' ).innerText = moment( data.sys.sunset * 1000 ).format( 'H:mm' );
}

function renderForecast( data ) {
	const forecast = document.querySelector( '.forecast' );
	data.forEach( ( element ) => {
		const day = document.createElement( 'div' );
		const date = document.createElement( 'div' );
		date.innerText = moment( element.dt * 1000 ).format( 'DD.MM' );
		day.appendChild( date );

		const icon = document.createElement( 'img' );
		icon.setAttribute( 'src', `http://openweathermap.org/img/wn/${ element.weather[0].icon }.png` );
		icon.setAttribute( 'title', element.weather[0].description );
		day.appendChild( icon );

		const dayTime = document.createElement( 'div' );
		dayTime.innerText = `${ Math.round( element.temp.day ) } °C`;
		dayTime.classList.add( 'daytime' );
		day.appendChild( dayTime );

		const night = document.createElement( 'div' );
		night.innerText = `${ Math.round( element.temp.night ) } °C`;
		day.appendChild( night );

		forecast.appendChild( day );
	} );
}

function getWeather( pos ) {
	const forecastURL = new URL( 'https://api.openweathermap.org/data/2.5/onecall' );
	forecastURL.searchParams.append( 'lat', pos.coords.latitude );
	forecastURL.searchParams.append( 'lon', pos.coords.longitude );
	forecastURL.searchParams.append( 'exclude', 'current,minutely,hourly' );
	forecastURL.searchParams.append( 'units', 'metric' );
	forecastURL.searchParams.append( 'appid', '74b93eb16af0c01d0ab5bdcfa1c52e11' );

	const currentURL = new URL( 'https://api.openweathermap.org/data/2.5/weather' );
	currentURL.searchParams.append( 'lat', pos.coords.latitude );
	currentURL.searchParams.append( 'lon', pos.coords.longitude );
	currentURL.searchParams.append( 'units', 'metric' );
	currentURL.searchParams.append( 'appid', '74b93eb16af0c01d0ab5bdcfa1c52e11' );
	Promise.all( [fetch( currentURL ), fetch( forecastURL )] )
		.then( ( responses ) => {
			const jsonPromises = [];
			for ( let i = 0; i < responses.length; i++ ) {
				jsonPromises.push( responses[i].json() );
			}
			Promise.all( jsonPromises )
				.then( ( forecasts ) => {
					document.querySelector( '.spinner' ).style.display = 'none';
					renderCurrentWeather( forecasts[0] );
					renderForecast( forecasts[1].daily );
				} )
				.catch( ( e ) => showErrorBanner( e ) );
		} )
		.catch( ( e ) => showErrorBanner( e ) );
}

function getLocation() {
	if ( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition( getWeather, showErrorBanner );
	} else {
		showErrorBanner( 'Geolocation is not supported by this browser' );
	}
}

setBackground();
getLocation();
