let ran = (1 + (Math.floor(Math.random() * 2)));

let player = document.querySelector("#player")
player.innerHTML = "player-" + ran + " to play"

var count1 = 0;
var count2 = 0;
if (ran == 1) {
    document.querySelector("#button2").setAttribute("disabled", "")
} else {
    document.querySelector("#button1").setAttribute("disabled", "")
}

function func1() {
    let ran1 = (1 + (Math.floor(Math.random() * 6)));
    count1 += ran1
    document.querySelector("#image").setAttribute("src", "dice" + ran1 + ".png")
    document.querySelector("#one").innerHTML = count1
    document.querySelector("#button1").setAttribute("disabled", "")
    document.querySelector("#button2").removeAttribute("disabled")
    if (count1 >= 30) {
        document.querySelector("#player").innerHTML = "player1 wins"
        document.querySelector("#button1").setAttribute("disabled", "")
        document.querySelector("#button2").setAttribute("disabled", "")
    }
}

function func2() {
    let ran2 = (1 + (Math.floor(Math.random() * 6)));
    count2 += ran2
    document.querySelector("#image").setAttribute("src", "dice" + ran2 + ".png")
    document.querySelector("#two").innerHTML = count2
    document.querySelector("#button2").setAttribute("disabled", "")
    document.querySelector("#button1").removeAttribute("disabled")
    if (count2 >= 30) {
        document.querySelector("#player").innerHTML = "player2 wins"
        document.querySelector("#button1").setAttribute("disabled", "")
        document.querySelector("#button2").setAttribute("disabled", "")
    }
}

function func3() {
    window.location.reload()
}