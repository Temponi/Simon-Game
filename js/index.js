var sequence = [];
var audio;
var i = 0;
var x;
var player;
var restart = false;
var seqPlayer = [];
var counter = 0;
var score = 0;
var restartPermission = true;

function generate() {
    var num = Math.floor(Math.random() * 4);
    sequence.push(num);
}

function blink(val) {
    switch (val) {
        case 0:
            $("#red").css("background-color", "#F55");
            audio = document.getElementById("soundRed");
            audio.play();
            setTimeout(function() {
                $("#red").css("background-color", "red");
            }, 500);
            break;
        case 1:
            $("#yellow").css("background-color", "#FF5");
            audio = document.getElementById("soundYellow");
            audio.play();
            setTimeout(function() {
                $("#yellow").css("background-color", "#EE0");
            }, 500);
            break;
        case 2:
            $("#blue").css("background-color", "#55D");
            audio = document.getElementById("soundBlue");
            audio.play();
            setTimeout(function() {
                $("#blue").css("background-color", "#00C");
            }, 500);
            break;
        case 3:
            $("#green").css("background-color", "#595");
            audio = document.getElementById("soundGreen");
            audio.play();
            setTimeout(function() {
                $("#green").css("background-color", "green");
            }, 500);
            break;
    }
}

function computer() {
    generate();
    i = 0;
    x = setInterval(function() {
        blink(sequence[i]);
        if (i == sequence.length) {
            clearInterval(x);
            player = true;
            counter = 0;
        }
        i++;
    }, 750);
}

function test() {
    if (counter == sequence.length) {
        counter = 0;
        seqPlayer = [];
        player = false;
        score++;
        $("#score").html(score);
        computer();
    }
}

$("#start").click(function() {
    if (restartPermission == true) {
        restartPermission = false;
        if (restart == false) {
            $("#start").html("Restart");
            computer();
            restart = true;
        } else {
            sequence = [];
            seqPlayer = [];
            score = 0;
            $("#score").html(score);
            computer();
            restart = false;
        }
    }
});

$("#red").click(function() {
    if (player == true) {
        blink(0);
        seqPlayer.push(0);
        if (seqPlayer[counter] == sequence[counter]) {
            counter++;
            test();
        } else {
            restartPermission = true;
            alert("You Lose - Press restart to try again");
            player = false;
        }
    }
});

$("#yellow").click(function() {
    if (player == true) {
        blink(1);
        seqPlayer.push(1);
        if (seqPlayer[counter] == sequence[counter]) {
            counter++;
            test();
        } else {
            restartPermission = true;
            alert("You Lose - Press restart to try again");
            player = false;
        }
    }
});

$("#blue").click(function() {
    if (player == true) {
        blink(2);
        seqPlayer.push(2);
        if (seqPlayer[counter] == sequence[counter]) {
            counter++;
            test();
        } else {
            restartPermission = true;
            alert("You Lose - Press restart to try again");
            player = false;
        }
    }
});

$("#green").click(function() {
    if (player == true) {
        blink(3);
        seqPlayer.push(3);
        if (seqPlayer[counter] == sequence[counter]) {
            counter++;
            test();
        } else {
            restartPermission = true;
            alert("You Lose - Press restart to try again");
            player = false;
        }
    }
});