window.onload = function() {
    let seconds = 0;
    let minutes = 0;
    let milliseconds = 0;

    let docSec = document.getElementById("seconds");
    let docMin = document.getElementById("minutes");
    let docMilli = document.getElementById("millisec");

    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");

    let buttonSplit = document.getElementById("split");
    let buttonLap = document.getElementById("lap");

    const recordDiv = document.getElementById("record");

    let interval;
    


    function startTimer(){
        milliseconds++;

        if (milliseconds >= 60){
            seconds++;
            milliseconds = 0;
        }
        
        if (seconds >= 60 ){
            minutes++;
            seconds = 0;
        }
    }

    function displayTime(){
        
        docSec.innerHTML = seconds > 9 ? seconds : "0" + seconds;
        docMin.innerHTML = minutes > 9 ? minutes : "0" + minutes;
        docMilli.innerHTML = milliseconds > 9 ? milliseconds : "0" + milliseconds;
    }

    function recordTime(){
        const paragraph = document.createElement("p");
        const time = document.createTextNode(docMin.innerHTML + ":" + docSec.innerHTML + ":" + docMilli.innerHTML)
        paragraph.classList.add("time")
        paragraph.appendChild(time);
        recordDiv.appendChild(paragraph);
    }

    //button
    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(function() {
            startTimer();
            displayTime();
        },10)
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        milliseconds= 0;
        displayTime();
        recordDiv.innerHTML =""
    }
    
    buttonSplit.onclick = recordTime;

    buttonLap.onclick = function() {
        recordTime();
        seconds = 0;
        minutes = 0;
        milliseconds= 0;
        displayTime();
    }
    
}