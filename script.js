let body = document.body
let html = document.html


// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    let today = new Date().getTime();

    // Find the distance between now and the count down date
    let interval = countDownDate - today;

    // Time calculations for days, hours, minutes and seconds
    let days = 30 % Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);
    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;


    // If the count down is finished, write some text
    if (interval < 0) {
        clearInterval(x);
        document.getElementById("new").innerHTML = "HAPPY NEW YEAR ! TIME FOR A NEW BEGINNING";
    }
}, 1000);

const rootElement = document.querySelector(":root")
let audioIcon = document.querySelector(".audio-icon")
let btnOpened = document.getElementById("btn-opened")
const song = document.getElementById("song")
let isPlaying = false
function disable(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function(){
        window.scrollTo(screenTop , screenLeft)
    }
    rootElement.style.scrollBehavior = "auto"  
}

function enable(){
    window.onscroll = function(){}
    rootElement.style.scrollBehavior = "smooth"
    audioIcon.classList.add("spin-lambat")
    playAudio()
}
disable()

function playAudio(){
    // song.volume = 0.7
    audioIcon.classList.remove("hidden")
    song.play()
    isPlaying = true
}

let audioContainer = document.querySelector("#audio-container")
audioContainer.addEventListener("click" , function(){
    audioIcon.classList.toggle("spin-lambat")
    if (isPlaying == true){
        song.pause()
    } else {
        song.play()
    }
    isPlaying = !isPlaying
})



