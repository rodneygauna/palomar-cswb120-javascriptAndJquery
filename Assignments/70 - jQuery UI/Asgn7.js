$(document).ready(function () {
  // Form Inputs
  var firstNameInput = $("#firstname");
  var lastNameInput = $("#lastname");
  var startDateInput = $("#startdate");
  // Error Spans
  var firstNameError = $("#firstname_error");
  var lastNameError = $("#lastname_error");
  var startDateError = $("#startdate_error");
  // Validation Output
  var validationOutput = $("#validation_output");
  // Plan Feelings
  var feelings = "";

  // jQuery UI Widgets - Tabs
  $("#tabs").tabs();

  // jQuery UI Widgets - Datepicker
  $("#startdate").datepicker({
    minDate: 0,
  });

  // jQuery UI Widgets - Draggable
  $("#greatplan").draggable({
    coursor: "pointer",
  });
  $("#poorplan").draggable({
    coursor: "pointer",
  });
  // jQuery UI Widgets - Droppable
  $("#droparea").droppable({
    drop: function (event, ui) {
      if (ui.draggable.attr("id") == "greatplan") {
        feelings = "Great";
        $(this)
          .css("background-color", "white")
          .find("p")
          .html("Great Plan Picked!");
      }
      if (ui.draggable.attr("id") == "poorplan") {
        feelings = "Poor";
        $(this)
          .css("background-color", "white")
          .find("p")
          .html("Poor Plan Picked!");
      }
    },
  });

  // Focus on first name input when the page loads
  firstNameInput.focus();

  // Functions when submit button is clicked
  $("#mysubmit").click(function () {
    // Clear previous error messages
    firstNameError.text("");
    lastNameError.text("");
    startDateError.text("");
    validationOutput.text("");

    // Form Validation
    form_is_valid = true;

    // If first name is empty, display error message
    if (firstNameInput.val() == "") {
      firstNameError.text("Please Enter First Name");
      validationOutput.removeClass("success");
      validationOutput.addClass("validation_error");
      validationOutput.html("<p>Please Correct Errors and Try Again</p>");
      form_is_valid = false;
    }

    // If last name is empty, display error message
    if (lastNameInput.val() == "") {
      lastNameError.text("Please Enter Last Name");
      validationOutput.removeClass("success");
      validationOutput.addClass("validation_error");
      validationOutput.html("<p>Please Correct Errors and Try Again</p>");
      form_is_valid = false;
    }

    // If the start date is empty, display error message
    if (startDateInput.val() == "") {
      startDateError.text("Please Enter the Start Date");
      validationOutput.removeClass("success");
      validationOutput.addClass("validation_error");
      validationOutput.html("<p>Please Correct Errors and Try Again</p>");
      form_is_valid = false;
    }

    // If all fields are filled out, display output message
    if (form_is_valid) {
      // Input Values
      firstNameValue = firstNameInput.val().trim();
      lastNameValue = lastNameInput.val().trim();
      // Add success css class
      validationOutput.addClass("success");
      // Output Message
      validationOutput.html(
        "<p>Success: " +
          firstNameValue +
          " " +
          lastNameValue +
          "<br />" +
          "Use the Start Date as your Password</p>"
      );
    }
  });

  // Function when showmyfeelings is clicked
  $("#showmyfeelings").click(function () {
    // If feelings is empty, display error message
    if (feelings == "") {
      $("#feelings_output").effect("bounce");
      $("#feelings_text").text("I don't know");
    }
    if (feelings == "Great") {
      $("#feelings_output").effect("blind", 600, function () {
        $("#feelings_output").fadeIn(1400);
      });
      $("#feelings_text").text("Great!").css("color", "green");
    }
    if (feelings == "Poor") {
      $("#feelings_output").effect("shake");
      $("#feelings_text").text("My Head Hurts!").css("color", "red");
    }
  });
});
