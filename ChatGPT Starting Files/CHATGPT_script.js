/* ==================================
   VIDEO DATA
   ================================== */

/*const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4"
];

/* ==================================
   RANDOM VIDEO ON PAGE LOAD
   ================================== */

/*const backgroundVideo =
    document.getElementById("backgroundVideo");

function randomVideo() {

    const randomIndex =
        Math.floor(Math.random() * videos.length);

    backgroundVideo.src =
        videos[randomIndex];
}

randomVideo();

/* ==================================
   DIGITAL CLOCK
   ================================== */

/*let seconds = 0;
let clockRunning = false;

let timer;

/* Update clock display */

/*function updateClock() {

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

/*document
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

/*document
.getElementById("pauseClock")
.addEventListener("click", () => {

    clockRunning = false;

    clearInterval(timer);
});

/* Reset */

/*document
.getElementById("resetClock")
.addEventListener("click", () => {

    seconds = 0;

    updateClock();

    clearInterval(timer);

    clockRunning = false;
});

/* ==================================
   SOUND DROPDOWN
   ================================== */

/*const soundButton =
document.getElementById(
    "soundDropdownBtn"
);

const soundDropdown =
document.getElementById(
    "soundDropdown"
);

/* Open/close dropdown */

/*soundButton.addEventListener(
    "click",
    () => {

        soundDropdown.style.display =
            soundDropdown.style.display === "block"
            ? "none"
            : "block";
    }
);

/* Close when clicking outside */

/*document.addEventListener(
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
);*/