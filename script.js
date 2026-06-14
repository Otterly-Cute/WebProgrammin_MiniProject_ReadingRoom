console.log("JS loaded");

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
   VIDEO ELEMENTS
   ================================== */

console.log("VIDEO SECTION START");

const backgroundVideo =
    document.getElementById(
        "backgroundVideo"
    );

console.log(backgroundVideo);

const videoSelect =
    document.getElementById(
        "videoSelect"
    );


/* ==================================
   FILL VIDEO DROPDOWN
   ================================== */

videos.forEach((video, index) => {

    const option =
        document.createElement(
            "option"
        );

    option.value = index;

    option.textContent =
        video.name;

    videoSelect.appendChild(
        option
    );
});


/* ==================================
   CHANGE VIDEO
   ================================== */

function setVideo(index) {

    console.log(
        "SETTING VIDEO:",
        index,
        videos[index].name
    );

    backgroundVideo.src =
        videos[index].file;

    videoSelect.value = index;

    backgroundVideo.load();

    backgroundVideo.play();
}


/* ==================================
   DROPDOWN FUNCTION
   ================================== */

videoSelect.addEventListener(
    "change",
    () => {

        const selectedIndex =
            videoSelect.value;

        setVideo(
            selectedIndex
        );
    }
);


/* ==================================
   RANDOM BUTTON
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

        setVideo(
            randomIndex
        );
    }
);


/* ==================================
   RANDOM START VIDEO
   ================================== */

const startIndex =
    Math.floor(
        Math.random() *
        videos.length
    );

setVideo(startIndex);

console.log("VIDEO SECTION END");

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

/* Start/Pause */

const startClockBtn =
    document.getElementById(
        "startClock"
    );

const playIcon =
    document.getElementById(
        "playIcon"
    );

const resetIcon =
    document.getElementById(
        "resetIcon"
    );

function animateIcon(icon) {

    icon.classList.remove(
        "icon-pop"
    );

    void icon.offsetWidth;

    icon.classList.add(
        "icon-pop"
    );
}

function shakeIcon(icon) {

    icon.classList.remove(
        "icon-shake"
    );

    void icon.offsetWidth;

    icon.classList.add(
        "icon-shake"
    );
}

startClockBtn.addEventListener(
    "click",
    () => {

        if (!clockRunning) {

            // START CLOCK

            clockRunning = true;

            timer = setInterval(() => {

                seconds++;

                updateClock();

            }, 1000);

            // Change icon

            playIcon.classList.remove(
                "fa-play"
            );

            playIcon.classList.add(
                "fa-pause"
            );

            animateIcon(playIcon);

        } else {

            // PAUSE CLOCK

            clockRunning = false;

            clearInterval(timer);

            // Change icon

            playIcon.classList.remove(
                "fa-pause"
            );

            playIcon.classList.add(
                "fa-play"
            );

            animateIcon(playIcon);
        }
    }
);

/* Reset */

document
.getElementById("resetClock")
.addEventListener(
    "click",
    () => {

        clearInterval(timer);

        clockRunning = false;

        seconds = 0;

        updateClock();

        playIcon.classList.remove(
            "fa-pause"
        );

        playIcon.classList.add(
            "fa-play"
        );

        animateIcon(resetIcon);
    }
);

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
            class="volume-slider"
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

document.querySelectorAll(".volume-slider")
    .forEach(slider => {

        function updateSlider() {

            const percent =
                (slider.value - slider.min) /
                (slider.max - slider.min) * 100;

            slider.style.background =
                `linear-gradient(
                    90deg,
                    rgb(203,160,153) 0%,
                    rgb(255,230,200) ${percent}%,
                    rgba(235,228,220,0.25) ${percent}%,
                    rgba(235,228,220,0.25) 100%
                )`;
        }

        updateSlider();

        slider.addEventListener(
            "input",
            updateSlider
        );
    });

/* Open/close dropdown */

soundButton.addEventListener(
    "click",
    () => {

        const isOpen =
            soundDropdown.style.display === "block";

        soundDropdown.style.display =
            isOpen ? "none" : "block";
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

    shakeIcon(randomSoundBtn)
    
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
        name: "Strategic Betrayals",
        file: "music/strategicBetrayals.mp3"
    },
    {
        name: "Luminary",
        file: "music/luminary.mp3"
    },
    {
        name: "Mystical",
        file: "music/mystical.mp3"
    },
    {
        name: "Eternal Meadow",
        file: "music/eternalMeadow.mp3"
    },
    {
        name: "Nuvole Bianche",
        file: "music/nuvoleBianche.mp3"
    },
    {
        name: "Kingdom",
        file: "music/kingdom.mp3"
    },
    {
        name: "Ordinary",
        file: "music/ordinary.mp3"
    },
    {
        name: "Breath of Quiet Hills",
        file: "music/breathOfQuietHills.mp3"
    },
    {
        name: "Codex",
        file: "music/codex.mp3"
    },
    {
        name: "Mountain Hike",
        file: "music/mountainHike.mp3"
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

        shakeIcon(randomMusicBtn)

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

musicSelect.value =
    randomStartMusic;

    function startInitialMusic() {

    setMusic(randomStartMusic);

    document.removeEventListener(
        "click",
        startInitialMusic
    );
}

document.addEventListener(
    "click",
    startInitialMusic,
    { once: true }
);


/* ==================================
   Quote Box
   ================================== */

const quotes = [

    {
        text: "The quickest way to a man's heart is through the fourth and fifth ribs.",
        source: "- Nesta Archeron, A Court of Mist and Fury"
    },

    {
        text: "We do not eat our allies.",
        source: "- Tairn, Iron Flame"
    },

    {
        text: "To the stars who listen and the dreams that are answered.",
        source: "- Rhysand, A Court of Mist and Fury"
    },

    {
        text: "Love in itself is a leap of faith.",
        source: "- Bonded by Thorns"
    },

    {
        text: "The mountains told me your name. The forest sang your song. My heart has been searching for you since the first dawn.",
        source: "- Forged by Malice"
    },

    {
        text: "It’s written all over his face—he would disintegrate anyone—everyone—if it means saving me. He would literally set fire to the world.",
        source: "- Covet"
    },

    {
        text: "Libraries were full of ideas - perhaps the most dangerous and powerful of all weapons.",
        source: "- Celaena Sardothien, Throne of Glass"
    },

    {
        text: "the thought of you not coming back makes me forget how to breathe.",
        source: "-  The Forbidden Wolf King "
    },

    {
        text: "You are my home.",
        source: "- Hawke Flynn, From Blood and Ash"
    },

    {
        text: "I chose you not as my next, but as my last, and should you fall, then I will follow.",
        source: "- Tairn, Iron Flame"
    }
];

const quotePreviousIcon =
    document.getElementById(
        "quotePreviousIcon"
    );

const quoteNextIcon =
    document.getElementById(
        "quoteNextIcon"
    );

function showQuote(index) {

    document.getElementById(
        "quoteText"
    ).textContent =
        `“${quotes[index].text}”`;

    document.getElementById(
        "quoteSource"
    ).textContent =
        quotes[index].source;
}

currentQuote =
    Math.floor(
        Math.random() *
        quotes.length
    );

showQuote(currentQuote);

document
.getElementById("nextQuote")
.addEventListener(
    "click",
    () => {

        currentQuote++;

        if (
            currentQuote >=
            quotes.length
        ) {
            currentQuote = 0;
        }

        showQuote(currentQuote);

        animateIcon(quoteNextIcon)
    }
);

document
.getElementById("previousQuote")
.addEventListener(
    "click",
    () => {

        currentQuote--;

        if (
            currentQuote < 0
        ) {

            currentQuote =
                quotes.length - 1;
        }

        showQuote(currentQuote);

        animateIcon(quotePreviousIcon)
    }
);

const quoteButton =
    document.getElementById(
        "quotePlayPause"
    );

const quotePlayIcon =
    document.getElementById(
        "quotePlayIcon"
    );

let quoteRunning = false;

document
.getElementById("quotePlayPause")
.addEventListener(
    "click",
    () => {

        if (!quoteRunning) {

            // START

            quoteRunning = true;

            quoteTimer =
                setInterval(
                    nextQuote,
                    120000
                );

            quotePlayIcon.classList.remove(
                "fa-play"
            );

            quotePlayIcon.classList.add(
                "fa-pause"
            );

            animateIcon(
                quotePlayIcon
            );

        } else {

            // PAUSE

            quoteRunning = false;

            clearInterval(
                quoteTimer
            );

            quotePlayIcon.classList.remove(
                "fa-pause"
            );

            quotePlayIcon.classList.add(
                "fa-play"
            );

            animateIcon(
                quotePlayIcon
            );
        }
    }
);

if (quoteRunning) {

    clearInterval(
        quoteTimer
    );

    quoteTimer =
        setInterval(
            nextQuote,
            120000
        );
}

/*==================================
   Book Box
================================== */

const searchBookBtn =
    document.getElementById(
        "searchBookBtn"
    );

searchBookBtn.addEventListener(
    "click",
    searchBook
);

const bookInput =
    document.getElementById(
        "bookInput"
    );

bookInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {
            searchBook();
        }
    }
);

async function searchBook() {

    const query =
        document.getElementById(
            "bookInput"
        ).value;

    if (!query) return;

    const response =
        await fetch(
            `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
        );

    console.log(response);

    const data =
        await response.json();

    if (
        !data.docs ||
        data.docs.length === 0
    ) {

        document.getElementById(
            "bookTitle"
        ).textContent =
            "No books found";

        return;
    }

    const book =
        data.docs[0];

    document.getElementById(
        "bookTitle"
    ).textContent =
        book.title || "";

    document.getElementById(
        "bookAuthor"
    ).textContent =
        book.author_name
            ? book.author_name.join(", ")
            : "Unknown Author";

    document.getElementById(
        "bookPublished"
    ).textContent =
        `Published: ${
            book.first_publish_year || "Unknown"
        }`;

    if (book.cover_i) {

        document.getElementById(
            "bookCover"
        ).src =
            `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

    } else {

        document.getElementById(
            "bookCover"
        ).src = "";
    }
}


console.log("Reached end of file");