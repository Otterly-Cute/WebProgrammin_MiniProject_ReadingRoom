/* ==================================
   VIDEO DATA
   ================================== */

const videos = [
    {
        name: "Snowy Study",
        file: "videos/snowy_study.mp4"
    },
    {
        name: "Cozy Library",
        file: "videos/cozy_library.mp4"
    },
    {
        name: "Rainy Road",
        file: "videos/rainy_road.mp4"
    },
    {
        name: "Thunder Study",
        file: "videos/thunder_study.mp4"
    },
    {
        name: "Snowy Library",
        file: "videos/snowy_library.mp4"
    },
    {
        name: "Starry Balcony",
        file: "videos/starry_balcony.mp4"
    },
    {
        name: "Ancient Baths",
        file: "videos/ancient_baths.mp4"
    },
    {
        name: "Hidden Oasis",
        file: "videos/hidden_oasis.mp4"
    },
    {
        name: "Sunset Fireplace",
        file: "videos/sunset_fireplace.mp4"
    },
    {
        name: "Castle Fireplace",
        file: "videos/castle_fireplace.mp4"
    },
    {
        name: "Magic Forest",
        file: "videos/magic_forest.mp4"
    },
    {
        name: "Castle Gardens",
        file: "videos/castle_gardens.mp4"
    },
    {
        name: "Training Grounds",
        file: "videos/training_grounds.mp4"
    },
    {
        name: "Dungeon Cell",
        file: "videos/dungeon_cell.mp4"
    }
];
/* ==================================
   RANDOM VIDEO ON PAGE LOAD
   ================================== */

const backgroundVideo =
    document.getElementById("backgroundVideo");

function randomVideo() {

    const randomIndex =
        Math.floor(Math.random() * videos.length);

    backgroundVideo.src =
        videos[randomIndex].file;
}

randomVideo();

/* ==================================
   Fill in the dropdown for video
   ================================== */
const videoSelect =
    document.getElementById("videoSelect");

/* Add all videos to dropdown */

videos.forEach((video, index) => {

    const option =
        document.createElement("option");

    option.value = index;

    option.textContent = video.name;

    videoSelect.appendChild(option);
});


/* ==================================
   Change video
   ================================== */

function setVideo(index) {

    backgroundVideo.src =
        videos[index].file;

    videoSelect.value = index;

    backgroundVideo.load();

    backgroundVideo.play();
}

/* ==================================
   Dropdown function for video
   ================================== */
videoSelect.addEventListener(
    "change",
    () => {

        const selectedIndex =
            videoSelect.value;

        setVideo(selectedIndex);
    }
);

/* ==================================
   Random button for video
   ================================== */
const randomVideoBtn =
    document.getElementById(
        "randomVideoBtn"
    );

randomVideoBtn.addEventListener(
    "click",
    () => {

        const randomIndex =
            Math.floor(
                Math.random() *
                videos.length
            );

        setVideo(randomIndex);
    }
);

/* ==================================
   Random start video
   ================================== */
const startIndex =
    Math.floor(
        Math.random() *
        videos.length
    );

setVideo(startIndex);

/* ==================================
   DIGITAL CLOCK
   ================================== */

let seconds = 0;
let clockRunning = false;

let timer;

/* Update clock display */

function updateClock() {

    const mins =
        String(Math.floor(seconds / 60))
        .padStart(2, "0");

    const secs =
        String(seconds % 60)
        .padStart(2, "0");

    document.getElementById("clock")
        .textContent =
        `${mins}:${secs}`;
}

/* Start */

document
.getElementById("startClock")
.addEventListener("click", () => {

    if(clockRunning) return;

    clockRunning = true;

    timer = setInterval(() => {

        seconds++;

        updateClock();

    }, 1000);
});

/* Pause */

document
.getElementById("pauseClock")
.addEventListener("click", () => {

    clockRunning = false;

    clearInterval(timer);
});

/* Reset */

document
.getElementById("resetClock")
.addEventListener("click", () => {

    seconds = 0;

    updateClock();

    clearInterval(timer);

    clockRunning = false;
});

/* ==================================
   Array of ambience sounds
   ================================== */
const sounds = [
    {
        name: "Forest",
        file: "ambience/amb_forest.mp3"
    },
    {
        name: "Fireplace",
        file: "ambience/amb_fire_crackle.mp3"
    },
    {
        name: "Rain",
        file: "ambience/amb_rain.mp3"
    },
    {
        name: "Thunder",
        file: "ambience/amb_thunder.mp3"
    },
    {
        name: "Wind",
        file: "ambience/amb_wind.mp3"
    },
    {
        name: "Swords",
        file: "ambience/amb_sword.mp3"
    },
    {
        name: "Water Dripping",
        file: "ambience/amb_drips.mp3"
    },
    {
        name: "Crickets",
        file: "ambience/amb_crickets.mp3"
    },
    {
        name: "Waterfall",
        file: "ambience/amb_waterfall.mp3"
    },
    {
        name: "Wind Chimes",
        file: "ambience/amb_chimes.mp3"
    }
];

sounds.forEach(sound => {

    sound.audio =
        new Audio(sound.file);

    sound.audio.loop = true;
});

/* ==================================
   SOUND DROPDOWN
   ================================== */

const soundButton =
document.getElementById(
    "soundDropdownBtn"
);

const soundDropdown =
    document.getElementById("soundDropdown");
console.log(sounds);
sounds.forEach((sound, index) => {

    const soundItem =
        document.createElement("div");

    soundItem.classList.add("sound-item");

    soundItem.innerHTML = `
        <label>
            <input
                type="checkbox"
                id="soundCheckbox${index}">
            ${sound.name}
        </label>

        <input
            type="range"
            id="volumeSlider${index}"
            min="0"
            max="100"
            value="50">
    `;

    soundDropdown.appendChild(soundItem);
});

sounds.forEach((sound, index) => {

    const checkbox =
        document.getElementById(
            `soundCheckbox${index}`
        );

    checkbox.addEventListener(
        "change",
        () => {

            if (checkbox.checked) {

                sound.audio.play();

            } else {

                sound.audio.pause();
                sound.audio.currentTime = 0;
            }
        }
    );

});


/* VOLUME STUFF*/

sounds.forEach((sound, index) => {

    const slider =
        document.getElementById(
            `volumeSlider${index}`
        );

    slider.addEventListener(
        "input",
        () => {

            sound.audio.volume =
                slider.value / 100;

        }
    );

});

sounds.forEach(sound => {

    sound.audio =
        new Audio(sound.file);

    sound.audio.loop = true;

    sound.audio.volume = 0.5;
});

/* Open/close dropdown */

soundButton.addEventListener(
    "click",
    () => {

        soundDropdown.style.display =
            soundDropdown.style.display === "block"
            ? "none"
            : "block";
    }
);

/* Close when clicking outside */

document.addEventListener(
    "click",
    (event) => {

        if(
            !soundDropdown.contains(event.target)
            &&
            event.target !== soundButton
        ) {

            soundDropdown.style.display =
                "none";
        }
    }
);

/* Random ambient sounds */

const randomSoundBtn =
    document.getElementById(
        "randomSoundBtn"
    );

randomSoundBtn.addEventListener(
    "click",
    randomAmbientSounds
);

function randomAmbientSounds() {

    // Stop all sounds first
    sounds.forEach(sound => {

        sound.audio.pause();
        sound.audio.currentTime = 0;
    });

    // Uncheck all checkboxes
    sounds.forEach((sound, index) => {

        const checkbox =
            document.getElementById(
                `soundCheckbox${index}`
            );

        checkbox.checked = false;
    });

    // Pick first random sound
    const first =
        Math.floor(
            Math.random() * sounds.length
        );

    // Pick second random sound
    let second;

    do {

        second =
            Math.floor(
                Math.random() * sounds.length
            );

    } while (second === first);

    // Activate both
    [first, second].forEach(index => {

        const checkbox =
            document.getElementById(
                `soundCheckbox${index}`
            );

        checkbox.checked = true;

        sounds[index].audio.play();
    });
}


/* ==================================
   MUSIC... LaLaLaLaLaaaa
   ================================== */

/* ==================================
   MUSIC DATA
   ================================== */

const music = [
    {
        name: "Medieval",
        file: "music/medieval.mp3"
    },
    {
        name: "Mystical",
        file: "music/mystical.mp3"
    }
];

/* ==================================
   CREATE AUDIO OBJECTS
   ================================== */

music.forEach(track => {

    track.audio =
        new Audio(track.file);

    track.audio.loop = true;

    // Default volume = 50%
    track.audio.volume = 0.5;
});

/* ==================================
   MUSIC ELEMENTS
   ================================== */

const musicSelect =
    document.getElementById("musicSelect");

const randomMusicBtn =
    document.getElementById("randomMusicBtn");

const musicVolume =
    document.getElementById("musicVolume");

/* ==================================
   FILL MUSIC DROPDOWN
   ================================== */

music.forEach((track, index) => {

    const option =
        document.createElement("option");

    option.value = index;

    option.textContent = track.name;

    musicSelect.appendChild(option);
});

/* ==================================
   CURRENT MUSIC TRACK
   ================================== */

let currentMusic = null;

/* ==================================
   CHANGE MUSIC
   ================================== */

function setMusic(index) {

    // Stop previous track

    if (currentMusic) {

        currentMusic.pause();

        currentMusic.currentTime = 0;
    }

    // Set new track

    currentMusic =
        music[index].audio;

    // Apply current volume

    currentMusic.volume =
        musicVolume.value / 100;

    // Play track

    currentMusic.play();

    // Update dropdown

    musicSelect.value = index;
}

/* ==================================
   DROPDOWN FUNCTIONALITY
   ================================== */

musicSelect.addEventListener(
    "change",
    () => {

        setMusic(
            musicSelect.value
        );
    }
);

/* ==================================
   RANDOM BUTTON
   ================================== */

randomMusicBtn.addEventListener(
    "click",
    () => {

        const randomIndex =
            Math.floor(
                Math.random() *
                music.length
            );

        setMusic(randomIndex);
    }
);

/* ==================================
   VOLUME SLIDER
   ================================== */

musicVolume.addEventListener(
    "input",
    () => {

        const volume =
            musicVolume.value / 100;

        music.forEach(track => {

            track.audio.volume =
                volume;
        });
    }
);

/* ==================================
   RANDOM MUSIC ON PAGE LOAD
   ================================== */

const randomStartMusic =
    Math.floor(
        Math.random() *
        music.length
    );

setMusic(randomStartMusic);



