const BUTTON = document.getElementbyID("songEntry")
const SONGNAME = document.getElementbyID("songName")

const CLIENT_ID = "174601228978-cak6isi1569pb7qi9lomaeuu228kr5eq.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

// Load auth2 library
function handleClientLoad(){
	gapi.load('client:auth2', initClient);
}

// Init API client library and wait for HTML form submission
function initClient(){
	gapi.client.init({
		discoveryDocs: DISCOVERY_DOCS,
		clientId: CLIENT_ID,
		scope: SCOPES
	}).then ( ()  => {
    BUTTON.addEventListener('submit', findVideos(SONGNAME))
  })

//Find the videos with the song Name
function findVideos(song){
  gapi.client.youtube.channels
  .list({
    part: 'snipppet,contentDetails,statistics',
    forUsername: song
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => alert('There was an issue searching for the song. Please try again'))
}
