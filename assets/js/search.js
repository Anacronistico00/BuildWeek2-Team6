const searchApiUrl =
  'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

const searchInput = document.querySelector('input[type="text"]');
const searchResultsContainer = document.getElementById('searchResults');
const audioPlayer = new Audio();

document.addEventListener('load', init());
function init() {
  changeColor();
  setTimeout(() => {
    updateHeartIcon();
  }, 500);
}
function getRandomColor() {
  const colors = [
    '#E13300',
    '#1E3264',
    '#E8115C',
    '#158A08',
    '#BC5800',
    '#8C67AC',
    '#777777',
    '#503750',
    '#0D73EC',
    '#8400E7',
    '#006450',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function changeColor() {
  const cards = document.querySelectorAll('.searchCard');

  cards.forEach((card) => {
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  });
}

function printAlbum(data) {
  albumImg.src = data.cover_medium || data.cover;
  albumTitle.textContent = data.title;
  artistName.textContent = data.artist.name;
  const year = data.release_date.substring(0, 4);
  albumReleaseSm.textContent = year;
  albumReleaseLg.innerText = year;
  songsNum.textContent = data.tracks.data.length;
  albumDuration.textContent = formatDuration(data.duration);
}

async function fetchAlbum(albumId) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
    );
    if (!response.ok) throw new Error('Errore nel recupero delle tracce');
    const data = await response.json();
    playlist = data.tracks.data;
    albumTracks = playlist;
    console.log(playlist);
    loadTrack(currentTrackIndex);
    //printAlbum(data);
    // renderSongs(playlist);
    return data;
  } catch (error) {
    console.error('Errore:', error);
  }
}

async function searchSongs(query) {
  try {
    const response = await fetch(`${searchApiUrl}${query}`);
    const data = await response.json();
    console.log('Canzoni trovate:', data.data);
    return data.data;
  } catch (error) {
    console.error('Errore nella ricerca delle canzoni:', error);
    return [];
  }
}

async function handleSearch(event) {
  const query = event.target.value.trim();
  const browseSection = document.getElementById('browseSection');
  const browseContainer = document.getElementById('browseContainer');

  browseSection.style.display = 'none';
  browseContainer.style.display = 'none';
  if (!query) {
    searchResultsContainer.innerHTML = '';
    browseSection.style.display = 'block';
    browseContainer.style.display = 'flex';
    return;
  }

  const results = await searchSongs(query);

  renderSearchResults(results);
}

function renderSearchResults(results) {
  searchResultsContainer.innerHTML = '';

  if (results.length === 0) {
    searchResultsContainer.innerHTML =
      "<p class='text-white'>Nessun risultato trovato</p>";
    return;
  }
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.padding = '0';

  results.forEach((song) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.marginBottom = '15px';
    li.classList.add('searchList');
    li.addEventListener('click', () => {
      playlist = [];
      const trackIndex = playlist.findIndex((track) => track.id === song.id);
      if (trackIndex === -1) {
        playlist.push(song);
        const album = fetchAlbum(song.album.id);
        console.log('album ', album);
        console.log('SCIANTALLL -> ', song);
        currentTrackIndex = playlist.length - 1;
      } else {
        currentTrackIndex = trackIndex;
      }

      loadTrack(currentTrackIndex);
      setTimeout(() => {
        nextTrackHandler();
        audioElement.play();
        updatePlayButton(true);
      }, 1000);
    });

    const img = document.createElement('img');
    img.src = song.album.cover_small;
    img.alt = song.title;
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginRight = '15px';

    const details = document.createElement('div');
    details.style.flex = '1';

    const title = document.createElement('p');
    title.textContent = `Titolo: ${song.title}`;
    title.style.color = 'white';
    title.style.margin = '0';

    const author = document.createElement('p');
    author.textContent = `Autore: ${song.artist.name}`;
    author.style.color = '#ccc';
    author.style.margin = '0';

    const duration = document.createElement('p');
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    duration.textContent = `Durata: ${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
    duration.style.color = '#aaa';
    duration.style.margin = '0';

    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(duration);

    li.appendChild(img);
    li.appendChild(details);

    ul.appendChild(li);
  });

  searchResultsContainer.appendChild(ul);
}

searchInput.addEventListener('input', handleSearch);
