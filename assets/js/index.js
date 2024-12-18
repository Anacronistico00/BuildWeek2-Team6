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

const ARTIST_TOP_URL =
  'https://striveschool-api.herokuapp.com/api/deezer/artist/1/top?limit=50';

async function fetchRandomSongs() {
  try {
    const response = await fetch(ARTIST_TOP_URL);
    if (!response.ok) throw new Error('Errore nel recupero delle tracce');

    const data = await response.json();
    const tracks = data.data; // Array di tracce popolari

    // Mescola le tracce
    const shuffledTracks = tracks.sort(() => Math.random() - 0.5);

    // Seleziona un subset casuale (ad esempio 1 traccia)
    const randomTrack = shuffledTracks[0]; // Prendi direttamente il primo brano

    console.log('Canzone casuale:', randomTrack);
    return randomTrack;
  } catch (error) {
    console.error('Errore:', error);
    return null; // Ritorna null in caso di errore
  }
}

// Esempio di utilizzo
fetchRandomSongs().then((randomTrack) => {
  if (randomTrack) {
    randomImg.src = randomTrack.album.cover; // Imposta l'immagine
    randomImg.alt = randomTrack.album.title;
    randomSongTitle.textContent = randomTrack.album.title;
    randomArtist.textContent = randomTrack.artist.name;
  } else {
    console.error('Impossibile ottenere una traccia casuale.');
  }
});
