


const musicKey = "631147a32cmsh3ddee0650df535fp168592jsn23f579588f47";
const musicAPI = "https://genius.p.rapidapi.com/artists/16775/songs";
const musicSearching = "https://genius.p.rapidapi.com/search?q=";

getMusic(musicAPI)

async function getMusic(url) {
	try {
		const resp = await fetch(url, {
			headers: {
				'X-RapidAPI-Host': 'genius.p.rapidapi.com',
				'X-RapidAPI-Key': musicKey,
			},
		});
		const respData = await resp.json();

		showMusic(respData);
	}
	catch (err) {
		console.log(err.message)
		// alert('Error: ' + err.message)
	}

}




function showMusic(data) {
	const music = document.querySelector(".movies")
	document.querySelector(".movies").innerHTML = "";

	data.response.songs.forEach((index) => {
		const MusicCard = document.createElement("div");
		MusicCard.classList.add('movie')
		MusicCard.innerHTML = `
			<div class="movie__cover-inner">
				<a href="${index.url}" target="_blank" class="music__href">
					<img src="${index.header_image_thumbnail_url}"
						alt="${index.title}" class="movie_cover">
					<div class="movie__cover--darkened"></div>
				</div>
				<div class="movie__info">
					<div class="movie__title">${index.title}</div>
					<div class="subtitle"> ${index.artist_names}</div>
					<div class="movie__caterogy">MUSIC</div>
				</div>
				`

		music.appendChild(MusicCard);

	})
}









const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'genius.p.rapidapi.com',
		'X-RapidAPI-Key': '631147a32cmsh3ddee0650df535fp168592jsn23f579588f47'
	}
};




const form = document.querySelector('form');
const search = document.querySelector('.header__search');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const ApiSearchURL = `${musicSearching}${search.value.split(' ').join('%20')}`;
	getMusicOne(ApiSearchURL)
	async function getMusicOne(url) {
		try {
			const resp = await fetch(url, {
				headers: {
					'X-RapidAPI-Host': 'genius.p.rapidapi.com',
					'X-RapidAPI-Key': musicKey,
				},
			});
			const respData = await resp.json();
			showMusicOne(respData);
			console.log(respData)
		}
		catch (err) {
			console.log(err.message)
			alert('Error: ' + err.message)
		}

	}

	function showMusicOne(data) {
		const music = document.querySelector(".movies")
		document.querySelector(".movies").innerHTML = "";

		data.response.hits.forEach((index) => {
			const MusicCard = document.createElement("div");
			MusicCard.classList.add('movie')
			MusicCard.innerHTML = `
					<div class="movie__cover-inner">
						<a href="${index.result.url}" target="_blank" class="music__href">
							<img src="${index.result.header_image_thumbnail_url}"
								alt="${index.result.title}" class="movie_cover">
							<div class="movie__cover--darkened"></div>
						</div>
						<div class="movie__info">
							<div class="movie__title">${index.result.title}</div>
							<div class="subtitle"> ${index.result.artist_names}</div>
							<div class="movie__caterogy">MUSIC</div>
						</div>
					`
			music.appendChild(MusicCard)
		})
		search.value = "";
	}
})















