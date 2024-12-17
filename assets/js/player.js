const ALBUM_URL =
  'https://striveschool-api.herokuapp.com/api/deezer/album/75621062';

let playlist = []; // Array delle tracce
let currentTrackIndex = 0; // Indice della traccia corrente
const audioElement = new Audio(); // Elemento audio HTML5

// Seleziona gli elementi HTML
const playPauseButton = document.querySelector('.play-pause');
const nextButton = document.querySelector('.bi-skip-end-fill');
const prevButton = document.querySelector('.bi-skip-start-fill');
const trackTitle = document.querySelector('#track h5');
const trackArtist = document.querySelector('#track p');
const albumCover = document.querySelector('#albumCover img');
const volumeControl = document.querySelector('.volume-control'); // Selezione della barra volume

// Funzione per recuperare i brani dall'API
async function fetchSongs() {
  try {
    const response = await fetch(ALBUM_URL);
    if (!response.ok) throw new Error('Errore nel recupero delle tracce');
    const data = await response.json();
    playlist = data.tracks.data;
    loadTrack(currentTrackIndex);
  } catch (error) {
    console.error(error);
  }
}

// Carica una traccia e aggiorna la UI
function loadTrack(index) {
  const track = playlist[index];
  if (track) {
    audioElement.src = track.preview;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist.name;
    albumCover.src = track.album.cover_medium;
    audioElement.play();
  }
}

// Play/Pause della traccia corrente
function togglePlayPause() {
  if (audioElement.paused) {
    audioElement.play();
    playPauseButton.classList.replace(
      'bi-play-circle-fill',
      'bi-pause-circle-fill'
    );
  } else {
    audioElement.pause();
    playPauseButton.classList.replace(
      'bi-pause-circle-fill',
      'bi-play-circle-fill'
    );
  }
}

// Carica la traccia successiva
function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
}

// Carica la traccia precedente
function prevTrack() {
  currentTrackIndex =
    (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
}

// Gestione del volume
function handleVolumeChange() {
  audioElement.volume = volumeControl.value / 100; // Scala il valore tra 0.0 e 1.0
}

// Event listeners per i pulsanti
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);
volumeControl.addEventListener('input', handleVolumeChange); // Aggiunge il controllo del volume

// Carica le tracce all'avvio
fetchSongs();
