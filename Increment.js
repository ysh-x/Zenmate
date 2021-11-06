    let ninter;

    function playing() {
        let aler = new Audio('./Bell.mp3', 50, false);
        aler.play();
    }

    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    function display(time, secs) {
        var timeDisp = pad(time) + "m : " + pad(secs) + "s";
        document.getElementById("okay").innerHTML = timeDisp;
        document.getElementById("okay").style.transition = "all 0.4s";
    }

    function start() {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;

        var time = parseInt(document.getElementById("min").value);
        console.log(time);

        var secs = 59;
        time = time - 1;
        ninter = setInterval(function f() {


            if (time == 0 && secs == 0) {
                secs = 0;
                time = 0;
                display(time, secs);
                playing();
                document.getElementById("start").disabled = false;
                clearInterval(ninter);
            } else {
                if (secs == 0) {
                    display(time, secs);
                    time--;
                    secs = 59;
                } else {
                    display(time, secs);
                    secs--;
                }
            }
        }, 1000);
    }

    function stop() {
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        secs = 0;
        time = 0;
        display(time, secs);
        clearInterval(ninter);

    }