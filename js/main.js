const   covers = document.querySelectorAll("#alien-art img"),
        playbtn = document.querySelector('#playButton'),
        pausebtn = document.querySelector('#pauseButton'),
        rewindbtn = document.querySelector('#rewindButton'),
        vol = document.querySelector('#volumeControl');


function playAudio() {
    document.querySelectorAll(".target-zone .label").forEach(label => {
    if (label.sound) {
        if (label.sound.paused) {
            label.sound.play();
        }
    } 
    
    else {
      label.sound = new Audio("audio/" + label.dataset.trackref + ".mp3");
      label.sound.loop = true;
      label.sound.play();
    }
  });
}

function restartAudio() {
    document.querySelectorAll(".target-zone .label").forEach(label => {
    if (label.sound) {
        label.sound.currentTime = 0;
    }
    });
}

function pauseAudio() { 
    document.querySelectorAll(".target-zone .label").forEach(label => {
    if (label.sound) {
        label.sound.pause();
    }
    });
}

function setVolume() {
    const volume = this.value / 100;

    document.querySelectorAll(".target-zone .label").forEach(label => {
    if (label.sound) {
        label.sound.volume = volume;
    }
    });
}

function resetAudio() {
    
}

covers.forEach(cover => cover.addEventListener('click', loadAudio));

playbtn.addEventListener('click', playAudio);
rewindbtn.addEventListener('click', restartAudio);
pausebtn.addEventListener('click', pauseAudio);

vol.addEventListener('change', setVolume);




const   labels = document.querySelectorAll(".label"),
        targetZones = document.querySelectorAll(".target-zone");


function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (this.children.length == 0) {
        this.appendChild(currentDraggedElement);
        currentDraggedElement = null;
    }
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
})

