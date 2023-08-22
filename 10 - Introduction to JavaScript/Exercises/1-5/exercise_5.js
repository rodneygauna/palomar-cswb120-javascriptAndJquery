var $ = function (id) {
    return document.getElementById(id);
};

var addClass = function () {
    $("mypara").setAttribute("class", "dazzle");
};

window.onload = function () {
    $("mybutton").onclick = addClass;
};
