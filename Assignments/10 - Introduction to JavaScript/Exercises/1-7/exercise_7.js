var $ = function (id) {
    return document.getElementById(id);
};

var calcArea = function () {
    var length = $("width").value;
    var width = $("length").value;
    var area = length * width;
    $("mymsg").innerHTML = area;
}

window.onload = function () {
    $("mybutton").onclick = calcArea;
}