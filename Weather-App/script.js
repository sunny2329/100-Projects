let city = "delhi";
let citys = document.querySelector('.city');
let input = document.querySelector("input");
let btn = document.querySelector('button');
let temp = document.querySelector('.temp-res');
let humidity = document.querySelector('.hum-res');
let speed = document.querySelector('.speed-res');

async function getData(url) {
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
}

btn.addEventListener("click", async function () {
    city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6348651cde46bf210fa94a0e7d245f9`;
    let datas = await getData(url);
    citys.innerHTML = datas.name;
    temp.innerHTML = (datas.main.temp - 273.15).toFixed(2) + "C";
    humidity.innerHTML = datas.main.humidity + "%";
    speed.innerHTML = datas.wind.speed + "m/s";

});





