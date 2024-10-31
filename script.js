const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeControl = document.getElementById('volume');
const progressControl = document.getElementById('progress');
const trackTitle = document.getElementById('track-title');
const playlistItems = document.querySelectorAll('#playlist li');

let currentTrackIndex = 0;

const tracks = [
    { src: 'y2mate.com - Lagan Tumse Laga Baithe Jo Hoga Dekha Jayega  Shyam Teri Lagan  Jaya Kishori Ji Bhajan  SanskarTV.mp3', title: 'Track 1' },
    { src: 'y2mate.com - Tum Mere Official Video  Darshan Raval  Gurpreet S  Gautam S  Lijo George.mp3', title: 'Track 2' },
    { src: 'y2mate.com - Har Kadam par koi Katil hai.mp3', title: 'Track 3' }
];

// Load the current track
function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    audio.load();
}

// Play the track
playButton.addEventListener('click', () => {
    audio.play();
});

// Pause the track
pauseButton.addEventListener('click', () => {
    audio.pause();
});

// Previous track
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Next track
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Adjust the volume
volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value;
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressControl.value = progress;
});

// Seek track
progressControl.addEventListener('input', (event) => {
    const seekTime = (audio.duration * event.target.value) / 100;
    audio.currentTime = seekTime;
});

// Load the first track
loadTrack(currentTrackIndex);

// Load track from playlist click
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
    });
});
