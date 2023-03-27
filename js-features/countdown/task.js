// Задача 1.

let time = 59;
const countDownEl = document.getElementById("timer");
setInterval(countTime,1000);

function countTime() {
    let hours = Math.floor(time/60) % 24;
    let minutes = Math.floor(time/60) % 60;
    let seconds = time % 60;
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
    if (time >= 1) {
    time--;
    } else if(time = '0') {
        alert("«Вы победили в конкурсе»");
    }
}