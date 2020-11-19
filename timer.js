var but5min = document.getElementById("5min");
var but10min = document.getElementById("10min");
var but15min = document.getElementById("15min");
var butCust = document.getElementById("custom-run");
var butReset = document.getElementById("reset");

var minute = 00;
var second = 00;
var display = document.getElementById("remaining");

var globalTimer = null;
var tickSound = new Audio();
var tickSound_loaded = false;
var alarmSound = new Audio();
var alarmSound_loaded = false;

tickSound.play();
alarmSound.play();

function updateDisplay() {

    // TODO: show two digit formatting.
    //    Today, we show '5:0'.  This should be '5:00'.
    //
    if (tickSound_loaded == false) {
        tickSound.src = "clock-tick.mp3";
        tickSound_loaded = true;
    }
    tickSound.play();

    display.innerHTML =  minute.toString() + ":" + second.toString();
    tickSound.play();
    --second;
    if (second <= 0) {
        --minute;
        second=59;
    }

    if (minute < 0) {
        clearInterval(globalTimer);
        if (alarmSound_loaded == false) {
            alarmSound.src = "Alarmclockringing.mp3";
            alarmSound_loaded = true;
        }
        alarmSound.play();
    }
}

function setTimer(m,s) {
    clearInterval(globalTimer);
    minute = m;
    second = s;

    total_sec = minute * 60 + second;

    globalTimer = setInterval(updateDisplay, 1000);
}

but5min.addEventListener('click',  function() { setTimer(5,0); }  );
but10min.addEventListener('click',  function() { setTimer(10,0); }  );
but15min.addEventListener('click',  function() { setTimer(15,0); }  );
butCust.addEventListener('click',  function() { 
    user_min = document.getElementById("min").value;
    user_sec = document.getElementById("sec").value;

    // TODO: Input validation.
    //    We only want integer.  If it isn't number, send alert.
    //
    setTimer( parseInt(user_min), parseInt(user_sec) );
});
butReset.addEventListener('click', function(){
    clearInterval(globalTimer);
    globalTimer = null;
    minute = 00;
    second = 00;
    document.getElementById("min").value = "00";
    document.getElementById("sec").value = "00";

    tickSound.pause();
    tickSound.currentTime = 0;
    alarmSound.pause();
    alarmSound.currentTime = 0;
});

