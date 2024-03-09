const time = document.querySelector('.time');
const format = document.querySelector('.format');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime,1000);
});

function showTime(){
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();


    secs <10 ? secs = "0" + secs : secs = secs;
    min <10 ? min = "0" + min : min = min;
    hr <10 ? hr = "0" + hr : hr = hr;

    hr < 12 ? format.innerHTML = `AM` : format.innerHTML = `PM`;

    time.innerHTML = `${hr} : ${min} : ${secs}`;
}