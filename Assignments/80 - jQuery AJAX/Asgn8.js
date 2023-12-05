$(document).ready(function() {
    $("#submit").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = username + "|" + password;
        var resultMessage = $("#message");
        $.post(
            "https://profperrytest.com/AJAXPHP/validate_logon.php",
            'data=' + dataString,
            function(result){
                resultMessage.html(result);
            }
        );
    });
});