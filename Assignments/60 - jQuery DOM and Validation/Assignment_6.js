$(document).ready(function () {
  // Form Inputs
  var firstNameInput = $("#first_name");
  var lastNameInput = $("#last_name");
  var genderChoices = $("input[name='gender']");
  var yearsSelect = $("#years");
  // Error Spans
  var firstNameError = $("#first_error");
  var lastNameError = $("#last_error");
  var genderError = $("#gender_error");
  var yearsError = $("#years_error");
  // Output
  var messageOutput = $("#message");

  // Focus on first name input when the page loads
  firstNameInput.focus();

  $("#mysubmit").click(function () {
    // Clear previous error messages
    firstNameError.text("");
    lastNameError.text("");
    genderError.text("");
    yearsError.text("");
    messageOutput.text("");

    // If first name is empty, display error message
    if (firstNameInput.val() == "") {
      firstNameError.text("You must Enter a First Name");
      firstNameInput.focus();
      return false;
    }

    // If last name is empty, display error message
    if (lastNameInput.val() == "") {
      lastNameError.text("You must Enter a Last Name");
      lastNameInput.focus();
      return false;
    }

    // If the gender radio buttons are not checked, display error message
    if (genderChoices.is(":checked") === false) {
      genderError.text("You must choose a Gender");
      genderChoices.focus();
      return false;
    }

    // If the years select is set to the default value, display error message
    if (yearsSelect.val() == "-") {
      yearsError.text("You must select a number");
      yearsSelect.focus();
      return false;
    }

    // If all fields are filled out, display output message
    // Input Values
    firstNameValue = firstNameInput.val().trim();
    lastNameValue = lastNameInput.val().trim();
    genderValue = "";
    // Populate the right value for the selected gender choice
    if (genderChoices.filter(":checked").val() == "M") {
      genderValue = "Male";
    } else if (genderChoices.filter(":checked").val() == "F") {
      genderValue = "Female";
    }
    yearsValue = yearsSelect.val();

    // Output background color of yellow
    messageOutput.attr("style", "background-color: yellow;");
    // Output message
    messageOutput.html(
      "<h2>Employment Stats for " +
        firstNameValue +
        " " +
        lastNameValue +
        "</h2><p>Your are a: " +
        genderValue +
        "<br>You have: " +
        yearsValue +
        " years experience</p>"
    );
  });
});
