//fetch from html
const timerdisplay = document.getElementById('timerdisplay');
const startBtn = document.getElementById('button-start');
const stopBtn = document.getElementById('button-stop');
const restartBtn = document.getElementById('button-reset');
let msec = 0;
let secs = 0;
let mins = 0;
let timer=null; // To store timer value
// This function will run when click on  start

startBtn.addEventListener('click', function() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 10);
    startBtn.setAttribute("disabled", "true")  // added this so that start button wont work when stop watch is running
});


stopBtn.addEventListener('click', function() {
    clearInterval(timer);
    startBtn.removeAttribute("disabled")      
});
restartBtn.addEventListener('click', function() {
    clearInterval(timer);
    timerdisplay.innerText = "00 : 00 : 00 ";
    startBtn.removeAttribute("disabled")
});


function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerText = `${minsString}: ${secsString} : ${msecString}`;
       
}
// --
// --end










