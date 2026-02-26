const SLIDER_WIDTH = 800;
const imageList = [
    'img/chernaia.jpg',
    'img/derevo.jpg',
    'img/abstraktsiia.jpg',
    'img/fraktal.jpg',
    'img/svechenie.jpg',
    'img/kraska.jpg',
    'img/zvezdy.jpg'
]

const PLAY_TIMEOUT_SEC = 3;
const SWIPE_THRESHOLD = 80;

const leftArrow = document.querySelector('.slider-nav.slider-left');
const rightArrow = document.querySelector('.slider-nav.slider-right');
const sliderLine = document.querySelector('.slider-line');

const dotsContainer = document.querySelector(".dots-container");

let currentSlide = 0;
let intervalTimer;
let dots = [];

let startX = 0;
let isSwiping = false;
let currentTranslate = 0;


init()
createDots()
updateDots(0)

function init() {
    let generatedHtml = '';

    imageList.forEach(imgStr => {
        generatedHtml = generatedHtml + `<img src='${imgStr}' alt='${imgStr}'>`
    })

    generatedHtml = generatedHtml + `<img src='${imageList[0]}' alt='${imageList[0]}'>`

    sliderLine.innerHTML = generatedHtml;

    leftArrow.addEventListener('click', leftClickHandler);
    rightArrow.addEventListener('click', rightClickHandler);

    document.body.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') {
            leftClickHandler()
        } else if (event.key === 'ArrowRight') {
            rightClickHandler()
        }
    })
   intervalTimer = setInterval(rightClickHandler, PLAY_TIMEOUT_SEC * 1000);

    document.getElementById("playButton").addEventListener('click', play)
    document.getElementById("pauseButton").addEventListener('click', pause)

    sliderLine.addEventListener("touchstart", touchStartHandler);
    sliderLine.addEventListener("touchmove", touchMoveHandler);
    sliderLine.addEventListener("touchend", touchEndHandler);
}

function leftClickHandler() {
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {
        currentSlide = imageList.length - 1;
    }
    moveToSlide(currentSlide);

}

function rightClickHandler() {
    currentSlide = currentSlide + 1;
    if (currentSlide >= imageList.length) {
        currentSlide = 0;
    }
    moveToSlide(currentSlide);
}

function moveToSlide(slide) {
    sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`;
    updateDots(slide);
}

function pause() {
    if (intervalTimer) {
        clearInterval(intervalTimer);
        intervalTimer = null;
    }
}

function play() {
    if (!intervalTimer) {
        intervalTimer = setInterval(rightClickHandler, PLAY_TIMEOUT_SEC * 1000);
    }
}

function createDots() {
    imageList.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => {
            currentSlide = index;
            moveToSlide(currentSlide);
            updateDots(currentSlide);
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
    });
}

function updateDots(slideIndex) {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}

function touchStartHandler(event) {
    startX= event.touches[0].clientX;
    isSwiping = true;
    pause();
    sliderLine.classList.remove("slow-switch");
    currentTranslate = -currentSlide * SLIDER_WIDTH;
}

function touchMoveHandler(event) {
    if (!isSwiping) return;
    const currentX = event.touches[0].clientX;
    const diff = currentX - startX;
    sliderLine.style.transform = `translateX(${currentTranslate + diff}px)`;
}

function touchEndHandler(event) {
    if (!isSwiping) return;
    isSwiping = false;
    sliderLine.classList.add("slow-switch");

    const endX = event.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff < 0) {
            rightClickHandler();
        } else {
            leftClickHandler();
        }
    } else {
        moveToSlide(currentSlide);
    }
}