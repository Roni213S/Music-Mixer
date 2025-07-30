const   covers = document.querySelectorAll("#alien-art img"),
        audioel = document.querySelector('audio'),
        playbtn = document.querySelector('#playButton'),
        pausebtn = document.querySelector('#pauseButton'),
        rewindbtn = document.querySelector('#rewindButton'),
        vol = document.querySelector('#volumeControl');

function loadAudio() {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    audioel.src = currentSrc;
    audioel.load();
    playAudio();
}

function playAudio() { 
    audioel.play(); 
}
function restartAudio() { 
    audioel.currentTime = 0; 
    playAudio(); 
}

function pauseAudio() { 
    audioel.pause(); 
}

function setVolume() {
    console.log(this.value);
    audioel.volume = (this.value/100); 
}

covers.forEach(cover => cover.addEventListener('click', loadAudio));

playbtn.addEventListener('click', playAudio);
rewindbtn.addEventListener('click', restartAudio);
pausebtn.addEventListener('click', pauseAudio);

vol.addEventListener('change', setVolume);