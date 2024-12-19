const artistId = new URLSearchParams(window.location.search).get('id');
console.log(artistId); // Debug: stampa l'ID dell'album

const topSongs = document.getElementById('topSongs');

async function fetchArtist(id) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`
    );
    const data = await response.json();
    console.log('Artista ricevuto:', data); // Debug: stampa le canzoni
    printArtist(data);
    console.log(data);
    topSongsPrint(data);
    // renderSongs(data.tracks.data); // Chiama la funzione per mostrare le canzoni
  } catch (error) {
    console.error('Errore nel caricamento delle canzoni:', error);
  }
}

async function topSongsPrint(artist) {
  try {
    const response = await fetch(`${artist.tracklist}`);
    const data = await response.json();
    console.log('Artista ricevuto:', data); // Debug: stampa le canzoni

    for (let i = 0; i < 6; i++) {
      let listener1 = Math.floor(Math.random() * 3 + 1);
      let listener2 = Math.floor(Math.random() * 899 + 100);
      let listener3 = Math.floor(Math.random() * 899 + 100);
      const fixListening = data.data[i].duration / 60;
      const totalListening = `${fixListening.toFixed(2)} min.`;
      topSongs.innerHTML += `<div class="d-flex justify-content-between align-items-center py-2">
<div class="d-flex align-items-center col-lg-7">
  <p id="trackNumber" class="text-secondary">${i + 1}</p>
  <img
    src="${data.data[i].album.cover_small}"
    class="imgArtist rounded-0 mx-3"
  />
  <div>
    <p id="artistTrackTitle">${data.data[i].title}</p>
  </div>
</div>
<div
  class="d-none d-lg-flex col-lg-5 justify-content-between align-items-center text-secondary"
>
  <p class="durationAndListening"><span>${listener1}</span>.<span>${listener2}</span>.<span>${listener3}</span></p>
  <p class="durationAndListening">${totalListening}</p>
</div>
<i class="bi bi-three-dots-vertical d-lg-none"></i>
</div>`;
    }
  } catch (error) {
    console.error('Errore nel caricamento delle canzoni:', error);
  }
}

function printArtist(data) {
  artistCover.src = data.picture_big;
  artistName.textContent = data.name;
  let num1 = Math.floor(Math.random() * 9 + 1);
  let num2 = Math.floor(Math.random() * 899 + 100);
  let num3 = Math.floor(Math.random() * 899 + 100);

  monthly.innerHTML = `<span>${num1}</span>.<span>${num2}</span>.<span>${num3}</span>`;
}

function init() {
  console.log('Inizializzazione...');
  fetchArtist(artistId);
  setTimeout(() => {
    updateHeartIcon();
  }, 1000);
}

// Esegui l'inizializzazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', init);
