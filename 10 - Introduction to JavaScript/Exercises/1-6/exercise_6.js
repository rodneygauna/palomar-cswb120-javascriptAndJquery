var $ = function (id) {
    return document.getElementById(id);
};

var displayName = function () {
    var firstname = $("firstname").value;
    var lastname = $("lastname").value;
    $("mymsg").innerHTML = "Hi " + firstname + " " + lastname;
};

window.onload = function () {
    $("mybutton").onclick = displayName;
}