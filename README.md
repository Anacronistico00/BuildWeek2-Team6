# BuildWeek2-Team6
**Descrizione del Progetto**
Questo progetto rappresenta un'applicazione web ispirata a un'interfaccia di lettore musicale (simile a Spotify). L'interfaccia è stata sviluppata con HTML, CSS (Bootstrap) e JavaScript per offrire un layout responsive adattabile sia a layout mobile che a layout desktop e user-friendly. 
 Più dettagliatamente il progetto è suddiviso in cinque pagine: Home, Album, Artist, Search e Library.


# Pagine
**1.	Home:**
La Home è la pagina principale e rappresenta il punto di partenza per l’utente. Al suo interno si trova una barra di ricerca che consente di navigare verso sezioni secondarie dell’applicazione. In questa pagina è possibile esplorare contenuti musicali, riprodurre brani, e selezionare album o artisti da approfondire.

**2.	Album:**
La sezione dedicata agli Album si focalizzata sulla scoperta e l’ascolto di dischi completi. Qui l’utente può selezionare brani dall’album scelto nella Home. La pagina è organizzata per mostrare la copertina dell’album, il titolo, gli autori, la durata complessiva e l’elenco delle tracce, ciascuna con la propria durata e altre informazioni, come il numero di riproduzioni.

**3.	 Artist:** 
La pagina degli Artisti consente di esplorare i contenuti relativi a un singolo artista o gruppo musicale. Se l’utente seleziona un artista nella pagina Home, viene reindirizzato a questa sezione, organizzata per mostrare l’immagine dell’artista, il nome, i brani principali e altri dettagli. Inoltre, è possibile visualizzare il numero di brani che l’utente apprezza di quell’artista. La struttura della pagina facilita un’immersione completa nel mondo musicale dell’artista selezionato.

**4.	Search:**
La pagina dedicata alla Ricerca offre strumenti avanzati per trovare canzoni, album e artisti. Qui l’utente può effettuare ricerche utilizzando il titolo di un brano, il nome di un artista o qualsiasi parola chiave correlata. Inoltre, la pagina mostra una panoramica dei diversi generi musicali disponibili all’interno della piattaforma.

**5.	Library:**
La pagina della Library permette all’ utente di visualizzare la sua lista personalizzata di brani a cui ha messo mi piace precedentemente. In questa pagina è possibile riprodurre il brano e rimuovere i brani in caso non fossero più considerati dei brani preferiti. La lista, oltre a mostrare il titolo mostra anche un anteprima della copertina e l’autore. Questa pagina serve per rendere ancora più personale l’ applicazione


# Funzionalità: Descrizione delle Pagine
**Home:**
L’implementazione di Javascript nella pagina Home srrve per offrire agli utenti un’esperienza interattiva basata sulla scoperta di nuova musica. Utilizzando l’API di Deezer, il progetto permette di recuperare e visualizzare in modo casuale brani musicali e album, presentandoli attraverso un’interfaccia grafica dinamica.
La caratteristica principale è la capacità di generare contenuti casuali. Ogni volta che un utente interagisce con l’app, l’applicazione invia richieste all’API per recuperare dettagli su canzoni o album in base a un ID casuale. I dati ottenuti vengono poi mostrati all’utente sotto forma di card, arricchite da elementi come immagini di copertina, titoli degli album e nomi degli artisti.
Un’altra caratteristica dell’applicazione è la possibilità di interagire con le card stesse. Quando l’utente passa il mouse sopra una card, viene visualizzata un’icona di "play" che permette di ripro-durre l’album. L’utente ha inoltre l’opzione di nascondere determinati elementi dell’interfaccia, rendendo l’esperienza personalizzabile. Dal punto di vista tecnico, l’app utilizza funzioni asincro-ne per recuperare i dati in tempo reale. Ogni richiesta all’API è gestita da controlli che verificano la presenza di risultati validi. Nel caso in cui non vengano trovati dati, il sistema reitera la ricerca automaticamente.

**Album:** 
Il Javascript permette alla pagina Album un recupero dinamico dei dati dall’API, per fornire un’esperienza personalizzata agli utenti.
L’identificativo dell’album viene estratto dalla URL della pagina. Successivamente, il sistema ef-fettua una chiamata all’ API per ottenere i dati completi dell’album, inclusi titolo, artista, data di rilascio, copertina e tracce.
Una volta ricevuti i dati, si aggiornano dinamicamente gli elementi HTML della pagina con le in-formazioni dell’album, come il titolo, il nome dell’artista, l’anno di rilascio e la durata totale dell’album. Gli elementi visivi principali, come la copertina e le statistiche delle canzoni, vengono aggiornati per riflettere il contenuto dell’album selezionato.
Parallelamente, si genera una lista interattiva delle tracce dell’album. Ogni traccia include: l'indi-ce della traccia, il titolo della canzone e il nome dell’artista, con uno stile visivo personalizzato, un numero casuale rappresentante il conteggio delle riproduzioni, la durata della traccia, calcolata e formattata in minuti e secondi.
La lista è resa dinamica e interattiva, con il supporto di stili CSS per migliorare l’aspetto visivo e l’esperienza utente. Nel caso in cui non vengano trovate tracce, la funzione notifica l’utente con un messaggio informativo.
Infine, il caricamento iniziale dei dati avviene al completamento del caricamento del documento. Un’ulteriore funzione di aggiornamento viene utilizzato per sincronizzare lo stato dei brani salvati con le interfacce grafiche, garantendo che i cuori indicativi siano aggiornati in base alle preferenze utente memorizzate.

**Artist:**
L’implementazione di Javascript a questa pagina permette di recuperare, al momento del carica-mento, l’identificativo dell’artista dalla query string della pagina e utilizza l’API per ottenere in-formazioni dettagliate. L’inizializzazione include anche la configurazione degli eventi interattivi, come il clic sul pulsante di riproduzione. Quando i dati dell’artista vengono caricati, la pagina ag-giorna elementi come l’immagine di copertina, il nome, e il conteggio degli ascoltatori. Inoltre, la lista dei brani principali dell’artista è generata dinamicamente. Ogni brano è presentato con detta-gli come il titolo, la durata e una piccola anteprima dell’album. L’ordine e l’estetica sono pensati per rendere l’interfaccia ordinata e intuitiva. Il pulsante di riproduzione non solo avvia o mette in pausa la musica, ma carica anche i brani dell’artista nella playlist globale se questa è inizialmente vuota. Ogni brano è cliccabile, consentendo all’utente di selezionare una traccia specifica e avviar-la immediatamente. Lo stile visivo dei brani si aggiorna dinamicamente per indicare chiaramente quale traccia è in riproduzione.

**Search:**
Questo Javascript permette alla pagina di Ricerca di implementare una funzionalità di ricerca mu-sicale basata sull'API. L'utente può cercare brani digitando il titolo o il nome dell'artista in una barra di ricerca, con risultati che vengono aggiornati in tempo reale e mostrati in modo chiaro. I risultati della ricerca presentano dettagli fondamentali per ogni brano, come l'immagine dell'al-bum, il titolo, il nome dell'artista e la durata della traccia. Ogni canzone ha un pulsante "Play" de-dicato che consente di avviare la riproduzione direttamente dalla pagina, utilizzando un lettore au-dio integrato. La logica del codice si basa su una gestione efficace degli eventi DOM e sull'uso di funzioni asincrone per comunicare con l'API, assicurando che i dati vengano caricati rapidamente e senza interruzioni. Inoltre, lo script permette alle card create nell’HTML inerenti ai generi di avere uno sfondo sempre di colore diverso ogni volta che l’utente ricarica o riapre la pagina.

**Library:**
Il Javascript in questa pagina  consente di gestire e visualizzare le canzoni salvate dall'utente nella sua libreria personale, utilizzando il localStorage per memorizzare la playlist. Quando la pagina viene caricata vengono recuperati i dati della playlist salvata. Se esistono dati validi, questi vengo-no elaborati e successivamente visualizzati.
Se i dati non sono disponibili o se si verifica un errore durante il caricamento, viene mostrato un messaggio che informa l’utente dell'assenza di canzoni salvate o di un errore nel recupero della li-breria. Se la playlist è vuota, viene visualizzato un messaggio che avvisa l'utente che non ci sono brani salvati.
Ogni brano salvato viene mostrato in una lista con il titolo della canzone, il nome dell'artista e una piccola anteprima della copertura dell'album. Inoltre, accanto a ogni brano c'è un'icona a forma di cuore che permette di rimuovere la canzone dalla libreria. Se l'utente clicca sul titolo di un brano, la canzone viene riprodotta direttamente dal player musicale, caricando la playlist salvata e av-viando la riproduzione.
È possibile, inoltre, rimuovere una canzone dalla libreria salvata. Quando una canzone viene ri-mossa, la playlist viene aggiornata e la lista dei brani viene ricaricata per riflettere i cambiamenti.

**In tutte le pagine:**
All’ interno di tutte le pagine è presente un collegamento Javascript che permette di far funzionare la produzione di canzoni e album. Questo script rappresenta un lettore musicale interattivo, sviluppato per offrire un’esperienza utente fluida e personalizzabile. Dalla Base Dati vengono recuperate le informazioni sulle tracce e sugli album. Al caricamento della pagina, il lettore viene inizializzato caricando una playlist specifica e impostando le tracce per la riproduzione. L’utente può visualizzare dettagli come il titolo del brano, l’artista e la copertina dell’album, che si aggiornano dinamicamente ogni volta che cambia la traccia.
La riproduzione è gestita tramite un elemento audio HTML5, che consente l’ascolto dei brani in anteprima. Il lettore offre i controlli standard di Play/Pausa, traccia precedente e traccia successiva, con pulsanti che cambiano stato in base all’azione effettuata. La barra di progresso consente di monitorare il tempo di riproduzione o di saltare a un punto specifico del brano. È inoltre possibile regolare il volume o attivare/disattivare il muto, con un’icona che indica lo stato corrente del volume.
Una funzionalità del lettore è la modalità shuffle, che permette di riprodurre le tracce in ordine casuale senza ripetizioni immediate. Il pulsante shuffle si colora di verde per indicare quando la modalità è attiva. Similmente, la modalità repeat consente di ripetere la traccia corrente, attivabile con un semplice click sul relativo pulsante. Entrambe le modalità garantiscono un’esperienza di ascolto personalizzata.
Il sistema permette anche di gestire una playlist salvata, che viene memorizzata localmente nel browser tramite LocalStorage. L’utente può aggiungere o rimuovere brani dalla playlist utilizzando un’icona a forma di cuore, visibile sia nella visualizzazione della playlist salvata sia accanto ai controlli del lettore. I brani salvati vengono elencati in un’area dedicata, con la possibilità di rimuoverli con un semplice click. La sincronizzazione tra il cuore del lettore e la lista salvata è automatica, garantendo un’esperienza coerente.



# Tecnologie Utilizzate
- **HTML5**: struttura delle pagine.
- **CSS3**: stile e layout delle pagine.
- **Bootstrap**: stile e layout delle pagine.
- **JavaScript**: funzionalità interattive, salvataggio dei dati e analisi.
- **Git & GitHub**: gestione del versionamento e collaborazione.
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/> </a> </p>


 # Autori
- [Walter Antonelli] ( https://github.com/WalterX95)
- [Rachele Barberis] ( https://github.com/rachelebarberis)
- [Daniele Franceschini] ( https://github.com/Dan131195)
- [Giuseppe Pomo] ( https://github.com/ThePomo)
- [Vittorio Turiaci] ( https://github.com/Anacronistico00)
- [Klajdi Kollcaku] (https://github.com/klajdi95)


# Project Description
This project is a web application inspired by a music player interface (similar to Spotify). The interface has been developed using HTML, CSS (Bootstrap), and JavaScript to provide a responsive layout adaptable to both mobile and desktop views, ensuring a user-friendly experience.
More specifically, the project is divided into four pages: Home, Album, Artist, and Search.

# Pages
**1.	Home:**
The Home page serves as the main interface and starting point for users. It includes a search bar that allows navigation to other sections of the application. On this page, users can explore musical content, play songs, and select albums or artists for further exploration.
**2.	Album:**
The Album section focuses on the discovery and listening of entire albums. Users can select songs from albums chosen on the Home page. This page displays the album cover, title, artists, total duration, and tracklist, with details such as individual track duration and the number of plays.
**3.	Artist:**
The Artist page enables users to explore content related to a specific artist or music group. If a user selects an artist on the Home page, they are redirected to this section, which showcases the artist’s image, name, top songs, and other details. Additionally, it displays the number of songs the user has liked from that artist. The page design facilitates an immersive experience into the artist’s musical world.
**4.	Search:**
The Search page provides advanced tools to find songs, albums, and artists. Here, users can search using song titles, artist names, or any relevant keywords. The page also highlights an overview of the different music genres available on the platform.
**5.	Library:**
The Library page allows the user to view their personalized list of tracks they have previously liked. On this page, it is possible to play a track and remove songs if they are no longer considered favorites. In addition to displaying the title, the list also shows a preview of the album cover and the artist. This page is designed to make the application even more personalized for the user.

 
# Features: Page Descriptions

**Home:**
JavaScript enriches the Home page with an interactive experience focused on discovering new music. Using the Deezer API, the project fetches and displays songs and albums randomly, presenting them through a dynamic graphical interface.
The main feature is its ability to generate random content. Whenever a user interacts with the app, it sends requests to the API to fetch details about songs or albums based on a random ID. The retrieved data is displayed to the user as cards, enriched with elements like album covers, titles, and artist names.
Another key feature is the ability to interact with these cards. Hovering over a card reveals a "play" icon that lets users play the album. Users can also hide specific interface elements for a customizable experience.
Technically, the app uses asynchronous functions to fetch real-time data. Each API request is monitored for valid results; if no data is found, the system automatically retries the search.

**Album:**
JavaScript enables dynamic data retrieval for the Album page, providing a personalized experience for users.
The album ID is extracted from the page’s URL, and the system subsequently sends an API call to fetch detailed album data, including the title, artist, release date, cover, and tracks.
Once data is retrieved, HTML elements are dynamically updated with album information such as title, artist name, release year, and total duration. Key visual elements like the album cover and song statistics are also updated to reflect the selected album’s content.
Additionally, an interactive tracklist is generated, featuring each track’s index, title, artist name, play count (randomly generated), and formatted duration in minutes and seconds.
The tracklist is designed to be visually appealing and interactive, with CSS styles enhancing its appearance and user experience. If no tracks are found, the system notifies the user with an informative message.
The initial data loading occurs once the document is fully loaded, and an update function syncs the state of saved songs with the graphical interface, ensuring that like icons accurately reflect user preferences.

**Artist:**
The implementation of JavaScript on this page allows retrieving, at the moment of loading, the artist’s identifier from the query string of the page and uses the API to obtain detailed information. The initialization also includes the configuration of interactive events, such as the click on the play button. When the artist’s data is loaded, the page updates elements such as the cover image, the name, and the listener count. Furthermore, the list of the artist’s top tracks is generated dynamically. Each track is presented with details such as the title, the duration, and a small preview of the album. The order and aesthetics are designed to make the interface neat and intuitive.
The play button not only starts or pauses the music but also loads the artist’s tracks into the global playlist if it is initially empty. Each track is clickable, allowing the user to select a specific track and start it immediately. The visual style of the tracks updates dynamically to clearly indicate which track is currently playing

**Search:**
JavaScript powers the Search page with a music search feature based on the API. Users can search for songs by typing the title or artist name into a search bar, with results updating in real-time and displayed clearly.
Search results include essential details for each song, such as the album cover, title, artist name, and track duration. Each song has a dedicated "Play" button to initiate playback directly from the page using an integrated audio player.
The code leverages efficient DOM event handling and asynchronous functions to communicate with the API, ensuring fast and seamless data loading.
Additionally, genre-related HTML cards are dynamically styled with different background colors every time the page is refreshed or reopened.

**Library:**
The JavaScript on this page allows the user to manage and view the songs saved in their personal library, using localStorage to store the playlist. When the page loads, the saved playlist data is retrieved. If valid data exists, it is processed and then displayed.
If the data is unavailable or if an error occurs during loading, a message is shown to inform the user of the absence of saved songs or an error in retrieving the library. If the playlist is empty, a message is displayed to let the user know that no songs are saved.
Each saved track is shown in a list with the song title, artist name, and a small preview of the album cover. Additionally, next to each song, there is a heart-shaped icon that allows the user to remove the song from the library. If the user clicks on a song title, the track is played directly from the music player, loading the saved playlist and starting the playback.
It is also possible to remove a song from the saved library. When a song is removed, the playlist is updated, and the song list is reloaded to reflect the changes.

**Across All Pages**
All pages integrate a JavaScript-powered music player that manages song and album playback. This interactive player provides a smooth and customizable user experience.
Track and album data are retrieved from the database, and upon page load, the player initializes by loading a specific playlist and setting tracks for playback. Users can view details like song title, artist, and album cover, which dynamically update with track changes.
Playback is managed via an HTML5 audio element, offering standard controls for play/pause, previous/next tracks, and a progress bar for monitoring or skipping playback. Users can adjust the volume or toggle mute, with an icon reflecting the current volume state.
The player includes a shuffle mode for randomized playback without immediate repetition, indicated by a green shuffle button. Similarly, the repeat mode allows for continuous playback of the current track, activated by clicking the corresponding button. Both modes enhance the personalized listening experience.
The system also supports managing a saved playlist stored locally in the browser via LocalStorage. Users can add or remove songs from the playlist using a heart icon, visible both in the saved playlist view and alongside the player controls. Saved songs are listed in a dedicated area, with the option to remove them with a single click. Synchronization between the player’s like button and the saved list is automatic, ensuring a consistent user experience.
 
# Technologies Used
- **HTML5**: Page structure.
- **CSS3**: Page styling and layout.
- **Bootstrap**: Page styling and layout.
- **JavaScript**: Interactive functionality, data storage, and processing.
- **Git & GitHub**: Version control and collaboration.
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/> </a> </p>

# Authors
- [Walter Antonelli] ( https://github.com/WalterX95)
- [Rachele Barberis] ( https://github.com/rachelebarberis)
- [Daniele Franceschini] ( https://github.com/Dan131195)
- [Giuseppe Pomo] ( https://github.com/ThePomo)
- [Vittorio Turiaci] ( https://github.com/Anacronistico00)
- [Klajdi Kollcaku] (https://github.com/klajdi95)
