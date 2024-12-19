const albumId = new URLSearchParams(window.location.search).get('id');
console.log(albumId); // Debug: stampa l'ID dell'album

// Elementi della pagina
const songsContainer = document.getElementById('songsContainer'); // Contenitore per la lista delle canzoni

//funzione per caricare i dati dell'album nel DOM
const albumImg = document.getElementById('albumImage');
const albumTitle = document.getElementById('albumTitle');
const artistName = document.getElementById('artistName');
const albumReleaseSm = document.getElementById('albumReleaseSm');
const albumReleaseLg = document.getElementById('albumReleaseLg');
const songsNum = document.getElementById('songsNum');
const albumDuration = document.getElementById('albumDuration');

// Funzione per recuperare le tracce di un album dall'API
async function fetchSongs(id) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`
    );
    const data = await response.json();
    console.log('Canzoni ricevute:', data); // Debug: stampa le canzoni
    printAlbum(data);
    renderSongs(data.tracks.data); // Chiama la funzione per mostrare le canzoni
  } catch (error) {
    console.error('Errore nel caricamento delle canzoni:', error);
  }
}

function printAlbum(data) {
  albumImg.src = data.cover;
  albumTitle.textContent = data.tracks.data[0].album.title;
  artistName.textContent = data.artist.name;
  const year = data.release_date.substring(0, 4);
  albumReleaseSm.textContent = year;
  albumReleaseLg.innerText += year;
  songsNum.textContent = data.tracks.data.length;
  albumDuration.textContent = Math.floor(data.duration / 60);
}

// Funzione per mostrare le canzoni nel DOM
function renderSongs(songs) {
  // Svuota il contenitore
  songsContainer.innerHTML = '';

  if (songs.length === 0) {
    songsContainer.innerHTML =
      "<p class='text-white'>Nessuna canzone trovata</p>";
    return;
  }

  // Crea la lista delle canzoni
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.classList.add('container-fluid');
  ul.style.padding = '0';
  let i = 0;
  songs.forEach((song) => {
    const li = document.createElement('li');
    li.classList.add('container-fluid', 'row');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.marginBottom = '15px';

    // Dettagli della canzone

    const index = document.createElement('div');
    index.classList.add('col-1');
    const newP = document.createElement('p');
    i++;
    newP.innerText = i;

    index.appendChild(newP);

    const details = document.createElement('div');
    details.classList.add('col-6');

    const title = document.createElement('p');
    title.textContent = `${song.title}`;
    title.style.color = 'white';
    title.style.margin = '0';

    const artist = document.createElement('p');
    artist.textContent = song.artist.name;
    artist.style.color = '#aaa';
    artist.style.margin = '0';

    const reproduction = document.createElement('div');
    reproduction.classList.add('col-3');

    const totalP = document.createElement('p');
    totalP.textContent = Math.floor(Math.random() * 9999999);
    reproduction.appendChild(totalP);

    const duration = document.createElement('div');
    duration.classList.add('col-2');

    const durationP = document.createElement('p');
    const tofixed = song.duration / 60;
    durationP.textContent = `${tofixed.toFixed(2)} min.`;
    duration.appendChild(durationP);

    details.appendChild(title);
    details.appendChild(artist);

    li.appendChild(index);
    li.appendChild(details);
    li.appendChild(reproduction);
    li.appendChild(duration);
    ul.appendChild(li);
  });

  songsContainer.appendChild(ul);
}

// Funzione di inizializzazione
function init() {
  console.log('Inizializzazione...');
  fetchSongs(albumId); // Caricamento iniziale delle tracce
  setTimeout(() => {
    updateHeartIcon();
  }, 500);
}

// Esegui l'inizializzazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', init);
