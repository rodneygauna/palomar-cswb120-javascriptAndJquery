var $ = function (id) {
    return document.getElementById(id);
}

var calcSleep = function () {
    var firstname = $("firstname").value;
    var age = $("age").value;
    var sleep = $("sleep").value;
    var result = Math.round(age * (sleep / 24));
    $("mymsg").innerHTML = "Hi " + firstname + ". You have slept " + result + " years of your life away.";
}

window.onload = function () {
    $("mybutton").onclick = calcSleep;
}