let savedPlaylist = []; // Array per i brani preferiti

// Funzione per aggiungere o rimuovere il brano dalla playlist
function togglePlaylist() {
  const currentTrack = playlist[currentTrackIndex];

  // Controlla se il brano è già nella playlist
  const trackIndex = savedPlaylist.findIndex(
    (track) => track.id === currentTrack.id
  );

  if (trackIndex === -1) {
    // Aggiungi il brano alla lista preferiti
    savedPlaylist.push(currentTrack);
    console.log(`Aggiunto alla playlist: ${currentTrack.title}`);
  } else {
    // Rimuovi il brano dalla lista preferiti
    savedPlaylist.splice(trackIndex, 1);
    console.log(`Rimosso dalla playlist: ${currentTrack.title}`);
  }

  // Salva la playlist nel localStorage
  savePlaylistToLocalStorage();

  // Aggiorna le icone dei cuori
  updateHeartIcon();

  // Aggiorna la lista salvata
  updateSavedPlaylistUI();
}

// Aggiunge o rimuove il brano preferito al click sull'icona
heartIcon.forEach((element) => {
  element.addEventListener('click', togglePlaylist);
});

const randomSong = document.getElementById('randomSong');
let randomImg = document.getElementById('randomImg');
let randomSongTitle = document.getElementById('randomSongTitle');
let randomArtist = document.getElementById('randomArtist');
const hideDiv = document.getElementById('hideDiv');
const randomSongBtn = document.getElementById('randomSongBtn');

hideDiv.addEventListener('click', function (e) {
  e.preventDefault();
  randomSong.classList.add('d-none');
});

// const ARTIST_TOP_URL =
//   'https://striveschool-api.herokuapp.com/api/deezer/artist/1/top?limit=50';

// async function fetchRandomSongs() {
//   try {
//     const response = await fetch(ARTIST_TOP_URL);
//     if (!response.ok) throw new Error('Errore nel recupero delle tracce');

//     const data = await response.json();
//     const tracks = data.data; // Array di tracce popolari

//     // Mescola le tracce
//     const shuffledTracks = tracks.sort(() => Math.random() - 0.5);

//     // Seleziona un subset casuale (ad esempio 1 traccia)
//     const randomTrack = shuffledTracks[0]; // Prendi direttamente il primo brano

//     console.log('Canzone casuale:', randomTrack);
//     return randomTrack;
//   } catch (error) {
//     console.error('Errore:', error);
//     return null; // Ritorna null in caso di errore
//   }
// }

// // Esempio di utilizzo
// fetchRandomSongs().then((randomTrack) => {
//   if (randomTrack) {
// randomImg.src = randomTrack.album.cover; // Imposta l'immagine
// randomImg.alt = randomTrack.album.title;
// randomSongTitle.textContent = randomTrack.album.title;
// randomArtist.textContent = randomTrack.artist.name;
//   } else {
//     console.error('Impossibile ottenere una traccia casuale.');
//   }
// });

function fetchAndDisplayData() {
  // Genera un numero intero casuale per 'query'
  let query = Math.floor(Math.random() * 1000 + 1);
  const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${query}/top?limit=1`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const artists = data.data;
      if (artists.length === 0) {
        fetchAndDisplayData();
      }
      console.log(artists);
      //const artists = data;
      artists.forEach((item) => {
        randomImg.src = item.album.cover;
        randomImg.alt = item.album.title;
        randomSongTitle.textContent = item.album.title;
        randomArtist.textContent = item.artist.name;

        console.log(`ID: ${item.id}, Nome: ${item.album.title}`);
      });
    })
    .catch((error) => console.error('Errore:', error));
}

function fetchHomePage() {
  //FUNZIONE SCIANTAL

  fetchAndDisplayData();
}

fetchHomePage();

const classConfig = {
  containerClass: 'p-1',
  cardClass: 'card bg-dark text-white',
  imageClass: 'card-img-top',
  bodyClass: 'card-body',
  titleClass: 'card-title',
  textClass: 'card-text',
  footerClass: 'card-footer',
  buttonClass: '',
};

function fetchAndDisplayCards() {
  // Genera un numero intero casuale per 'query'
  let query = Math.floor(Math.random() * 1000 + 2);
  const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/album/${query}`;

  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let artists = data;

      const mainContainer = document.getElementById('fetchCards');
      mainContainer.classList.add('row');
      query = Math.floor(Math.random() * 400 + 2);

      // Crea un div per il contenitore della card
      const containerDiv = document.createElement('div');
      containerDiv.className = classConfig.containerClass;

      // Crea l'elemento della card
      const cardDiv = document.createElement('div');
      cardDiv.className = classConfig.cardClass;
      console.log(artists.picture);
      // Aggiungi l'immagine alla card
      const imgElement = document.createElement('img');
      imgElement.className = classConfig.imageClass;
      imgElement.src = artists.album.cover; // Usa l'URL dell'immagine dal JSON
      imgElement.alt = artists.name;
      cardDiv.appendChild(imgElement);

      // Crea il corpo della card
      const cardBody = document.createElement('div');
      cardBody.className = classConfig.bodyClass;

      // Aggiungi il titolo
      const titleElement = document.createElement('h5');
      titleElement.className = classConfig.titleClass;
      titleElement.textContent = artists.album.name;
      cardBody.appendChild(titleElement);

      // Aggiungi il corpo alla card
      cardDiv.appendChild(cardBody);

      // Crea il footer della card
      const cardFooter = document.createElement('div');
      cardFooter.className = classConfig.footerClass;

      // Aggiungi un pulsante al footer
      const buttonElement = document.createElement('a');
      buttonElement.className = classConfig.buttonClass;
      buttonElement.href = artists.preview; // Link all'album
      buttonElement.textContent = 'Ascolta ora';
      cardFooter.appendChild(buttonElement);

      // Aggiungi il footer alla card
      cardDiv.appendChild(cardFooter);

      // Aggiungi la card al contenitore
      containerDiv.appendChild(cardDiv);

      // Aggiungi il contenitore al mainContainer nel DOM
      mainContainer.appendChild(containerDiv);
      console.log(`ID: ${artists.id}, Nome: ${artists.album.title}`);
    })
    .catch((error) => console.error('Errore:', error));
}

function fetchCardsMain() {
  //FUNZIONE SCIANTAL

  fetchAndDisplayCards();
}

fetchCardsMain();

// Aggiorna i dati ogni 10 secondi
//setInterval(fetchAndDisplayCards, 1000);
