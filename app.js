const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');

let intervalId;
let mi = 0, se = 0; ms = 0;

function updatetime() {
    milliseconds.textContent = ms.toString().padStart(2,'0');
    seconds.textContent = se.toString().padStart(2,'0');
    minutes.textContent = mi.toString().padStart(2,'0');
}

function startTimer(){
    if(!intervalId){
        intervalId = setInterval(() => {
            ms+=10;
            if(ms>=1000){
                se ++;
                ms=0;
            }if(se>=60){
                mi ++;
                se=0;
            }
        updatetime();
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    mi = 0, se = 0; ms = 0;
    updatetime();
}

start.addEventListener("click",startTimer);
pause.addEventListener("click",pauseTimer);
reset.addEventListener("click",resetTimer);