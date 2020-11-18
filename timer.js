var but5min = document.getElementById("5min");
var but10min = document.getElementById("10min");
var but15min = document.getElementById("15min");
var butCust = document.getElementById("custom-run");

var minute = 00;
var second = 00;
var display = document.getElementById("remaining");


function setTimer(m,s) {
    minute = m;
    second = s;

    total_sec = minute * 60 + second;

    // TODO: show two digit formatting.
    //    Today, we show '5:0'.  This should be '5:00'.
    //

    display.innerHTML =  minute.toString() + ":" + second.toString();
    while (total_sec > 0) {
        --total_sec;    // total_sec = total_sec - 1;   (++total_sec) or (total_sec++)

        // TODO: 
        //    Count down by 1
        minute = total_sec / 60;
        second = total_sec % 60;
        display.innerHTML =  minute.toString() + ":" + second.toString();
        
        sleep(1000);
    }
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

