// Counts the amount of break minutes added/subtracted
var wordcount = 0;
var breakcount = 0;

// Counts the amount of break time and work time
var work = document.getElementById('work-time');
var tbreak = document.getElementById('break-time');

// Increased/Decreased break
var workinc = document.getElementById('inc-work');
var workdec = document.getElementById('dec-work');

// Increased/Decreased break
var breakinc = document.getElementById('inc-break');
var breakdec = document.getElementById('dec-break');


// Prints work and break to the html
work.innerHTML = wordcount;
tbreak.innerHTML = breakcount;

// Minutes & Seconds
var minutes = 25;
var seconds = 0;

// Prints the timer 
var timeSet;

// Checks if work time or break time
var workTime = true;

// Disables button when start button is activated
document.getElementById('start').disabled = false;

// changes the colour of the title to show activity
document.getElementById('work-title').style.color = "red";

// Resets the count for work time when the break time is over
function resetCount() {
    document.getElementById('work-title').style.color = "red";
    document.getElementById('break-title').style.color = "black";
    stop();
    workTime = true;
    minutes = 25;
    seconds = 0;
    document.getElementById('timer').innerHTML = minutes + ":" + '0' + seconds;
}
// Current time
document.getElementById('timer').innerHTML = minutes + ":" + '0' + seconds;

// Sets the values for the timer
function pomotimer() {

// Resets the seconds counter
if (seconds < 1) {
    minutes--;
    seconds = 60;
}
// Seconds and Minutes
seconds--;
document.getElementById('timer').innerHTML = minutes + ":" + '0' + seconds;
if (seconds > 9) {
    document.getElementById('timer').innerHTML = minutes + ":"  + seconds; 
}

// Sets the break time
if (seconds === 0 && minutes == 0 && workTime) {
    pomobreak();
}

// Sets the work time
if (seconds === 0 && minutes === 0 && !workTime) {
    resetCount();
}
}

// Activates the pomodoro break time
function pomobreak() {
    document.getElementById('work-title').style.color = "black";
    document.getElementById('break-title').style.color = "red";
    workTime = false;
    stop();
    minutes = 5;
    seconds = 0;
    document.getElementById('timer').innerHTML = minutes + ":"  + '0' + seconds;
}

// Activates Start button
function start() {
    timeSet = setInterval(pomotimer, 1000);
    document.getElementById('start').disabled = true;
}

// Activates Reset Button
function reset() {
    minutes = 25;
    seconds = 0;
}

// Activates Stop Button
function stop() {
    clearInterval(timeSet);
    document.getElementById('start').disabled = false;
}

// Click Button
document.getElementById('start').addEventListener('click', start);

// Reset Button
document.getElementById('reset').addEventListener('click', reset);

// Stop Button
document.getElementById('stop').addEventListener('click', stop);

// Increases the work time
function workin() {
    if (workTime) { 
    wordcount++;
    work.innerText = wordcount;
    minutes++;
    }
}

// Decreases the work time
function workde() {
    if (workTime) {
    if (wordcount > 0) {
        wordcount--;
        work.innerText = wordcount;
        if (minutes >= 0) {
            minutes--;
        }
    }
    }
}

// Increases the break time
function breakin() {
    if (!workTime) {
    breakcount++;
    tbreak.innerText = breakcount;
    minutes++;
    }
}

// Decreases the break time
function breakde() {
    if (breakcount > 0) {
        breakcount--;
        tbreak.innerText = breakcount;
        if (minutes >= 0) {
            minutes--;
        }
    }
}

// Increase/Decrease work and break
document.getElementById('inc-work').addEventListener('click', workin);
document.getElementById('dec-work').addEventListener('click', workde);
document.getElementById('inc-break').addEventListener('click', breakin);
document.getElementById('dec-break').addEventListener('click', breakde);