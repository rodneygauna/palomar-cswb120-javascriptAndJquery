$(document).ready(function () {
    // Task 1
    $("img").hover(function () {
        $(this).css("border", "outset 10px");
    }, function () {
        $(this).css("border", "none");
    });

    // Task 2
    $("#vacationimages img").click(function () {
        var alt = $(this).attr("alt");
        var src = $(this).attr("src");
        $("#currentimage").attr("src", src);
        $("#imagedesc").text(alt);
        $("#bigimage").css("display", "block");
        $("#showhidebutton").val("Hide Image");
    });

    // Task 4
    $("#submitme").click(function () {
        var firstname = $("#firstname").val();
        var vacation_destination = $("#imagedesc").text();

        // clear out any previous error messages or messages from previous clicks
        $("#firstname").next().text("");
        $("#mymessage").text("");

        // Task 3
        if (firstname == "") {
            $("#firstname").next().text("Must enter first name");
        }
        // if the user has entered a first name and selected a vacation image, display the message
        if (firstname != "" && vacation_destination != "") {
            $("#mymessage").text(firstname + " you want a " + vacation_destination);
        }
    });

    // Task 5
    $("#showhidebutton").click(function () {
        if ($("#showhidebutton").val() == "Hide Image") {
            $("#bigimage").css("display", "none");
            $(this).val("Show Image");
        } else {
            $("#bigimage").css("display", "block");
            $(this).val("Hide Image");
        }
    });
});