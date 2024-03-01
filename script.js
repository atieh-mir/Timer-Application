
const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const milisecondsLabel = document.getElementById('miliseconds');


const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist');

let milliseconds = 0;
let seconds = 0;
 let minutes= 0; 
 let interval;


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


 function startTimer(){  
    interval = setInterval(updateTimer, 10)
     startButton.disabled = true;
 }

 function stopTimer(){
    clearInterval(interval);
    addToLaplist();
    resetTimerData();
    startButton.disabled = false;
}
function pauseTimer(){
    clearInterval(interval);
    startButton.disabled = false;

}
function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function padTime(time){
    return time.toString().padStart(2, '0');
}

function displayTimer(){
    milisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function resetTimerData(){
    milliseconds = 0;
    seconds= 0;
    minutes = 0;
    displayTimer();
}

function addToLaplist() {
     const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
     const listItem = document.createElement('li');
     listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1 }: </span>${lapTime}`;
     lapList.appendChild(listItem);
}

