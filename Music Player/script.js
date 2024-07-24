let songIndex = 0;
let audioElement = new Audio('song1.mp3.mp3');
let masterPlay = document.getElementById('playBtn');
let myProgressBar = document.getElementById('range');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('finalName');
let songItems = Array.from(document.getElementsByClassName('song-list'));

let songs = [
    {songName: 'Chaar bottle vodka', filePath: 'song1.mp3.mp3', coverPath: 'song1.jpg'},
    {songName: '295 song sidhu moose', filePath: 'song2.mp3.mp3', coverPath: 'song2.jpg'},
    {songName: 'Tere mere prem', filePath: 'song3.mp3.mp3', coverPath: 'song3.jpg'},
    {songName: 'Tumhe dillagi song', filePath: 'song4.mp3.mp3', coverPath: 'song4.jpg'},
    {songName: 'Blue eyes song', filePath: 'song5.mp3.mp3', coverPath: 'song5.jpg'},
    {songName: 'Party all night', filePath: 'song6.mp3.mp3', coverPath: 'song6.jpg'},
    {songName: 'Zaroori tha song', filePath: 'song7.mp3.mp3', coverPath: 'song7.jpg'},
];

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName; 
})
 

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songBtnPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songBtnPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1
});