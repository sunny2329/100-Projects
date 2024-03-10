let time = document.querySelector('.time');
let play = document.querySelector('.play');
let stop = document.querySelector('.stop');
let restart = document.querySelector('.restart');

let [seconds, minutes, hours, milli] = [0, 0, 0, 0];
let timer = null;


function stopWatch() {
    milli += 10;
    if (milli >= 1000) {
        milli = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;

            }
        }
    }


    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = h + ":" + m + ":" + s + ":" + milli;

}

function playClock() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
}

function restartWatch() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}

function watchStop() {
    clearInterval(timer);
}

play.addEventListener('click', playClock);
stop.addEventListener('click', watchStop);
restart.addEventListener('click', restartWatch);