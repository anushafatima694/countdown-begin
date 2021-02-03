var minV = +prompt("Enter min");
var secV = +prompt("Enter sec");
var interval;

function startCountdown() {
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");

    interval = setInterval(function () {
        secV = secV - 1
        sec.innerHTML = secV
        min.innerHTML = minV
        if (secV < 1 && minV !== 0) {
            secV = 60;
            minV = minV - 1;
        }
        else if(minV < 1 && secV < 1){
            clearInterval(interval)
            alert("Countdown end")
        }
    }, 1000)
}




