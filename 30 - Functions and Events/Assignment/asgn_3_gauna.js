/* General Criteria
------------------------------- */
// Use the $ shortcut function for document.getElementById
// When the page first loads, attach all event handlers to the buttons and place the cursor on the first item

/* Program Processing
------------------------------- */
// 1. Call a "validateItems()" function
//   - Validates all the fields on the form
//   - Firstname, Lastname, Email, and Donation fields musht have something entered or an error message should appear next to the field in error.
//   - The City field must have a value other than "-"
//   - The Donation field , if not blank, must be checked to see that it is numberic or an error message should appear next to the field.
//   - The "validateItems()" function must return a boolean value (true or false)
// 2. The "addPatrons()" (anonymous) function must:
//   - must call the "validateItems()" function
//   - must receive the boolean returned by validateItems() and store it in a variable named "isValid"
//   - 'isValid" logic:
//      - If true, then use JS to submit the form to the server using "$('myform').submit();"
//      - If false, then display "Patron Not Added!" in the endmessage.
// 3. The "clearFields()" (anonymous) function will:
//   - Make the firstname, lastname, email, and donations fields be empty.
//   - Make the city field display the "-" option
//   - Make all error message fields be blank again

/* Shorthand for getElementById()
------------------------------- */
var $ = function (id) {
    return document.getElementById(id);
}

/* Global Variables
------------------------------- */
var isValid;

/* addPatrons() function
------------------------------- */
var addPatrons = function () {
    // Local Variables
    var firstNameValue = $("firstname").value;
    var lastNameValue = $("lastname").value;
    var emailValue = $("email").value;
    var cityValue = $("city").value;
    var donationValue = $("donation").value;

    // Call clearErrors() function
    clearErrors();

    // Call validateItems() function
    validateItems(firstNameValue, lastNameValue, emailValue, cityValue, donationValue);

    // Logic around isValid
    if (isValid == true) {
        $("myform").submit();
    } else if (isValid == false) {
        $("endmessage").innerHTML = "Patron Not Added!"
    }
}

/* validateItems() function
------------------------------- */
function validateItems(f, l, e, c, d) {
    // Local Variables
    var firstname = f;
    var lastname = l;
    var email = e;
    var city = c;
    var donation = d;

    // Valid fields
    var firstValid = true;
    var lastValid = true;
    var emailValid = true;
    var cityValid = true;
    var donationValid = true;

    // Validate fistname
    if (firstname == "") {
        $("firstnameerror").innerHTML = "Enter First Name";
        firstValid = false;
    } else {
        firstValid = true;
    }

    // Validate lastname
    if (lastname == "") {
        $("lastnameerror").innerHTML = "Enter Last Name";
        lastValid = false;
    } else {
        lastValid = true;
    }

    // Validate email
    if (email == "") {
        $("emailerror").innerHTML = "Enter Email";
        emailValid = false;
    } else {
        emailValid = true;
    }

    // Validate city
    if (city == "" || city == "-") {
        $("cityerror").innerHTML = "Select a City from the list";
        cityValid = false;
    } else {
        cityValid = true;
    }

    // Vaidate donation
    console.log(donation)
    if (donation == "") {
        $("donationerror").innerHTML = "Enter Donation Amount";
        donationValid = false;
    } else if (isNaN(parseFloat(d))) {
        $("donationerror").innerHTML = "Amount must be numeric";
        donationValid = false;
    } else {
        donationValid = true;
    }

    // Check all valid fields and return isValue
    if (firstValid == true && lastValid == true && emailValid == true && cityValid == true && donationValid == true) {
        return isValid = true;
    } else {
        return isValid = false;
    }
}

/* clearErrors() function
------------------------------- */
var clearErrors = function () {
    // Error Variables
    firstError = $("firstnameerror");
    lastError = $("lastnameerror");
    emailError = $("emailerror");
    cityError = $("cityerror");
    donationError = $("donationerror");
    endError = $("endmessage");

    // Clear errors
    firstError.innerHTML = "";
    lastError.innerHTML = "";
    emailError.innerHTML = "";
    cityError.innerHTML = "";
    donationError.innerHTML = "";
    endError.innerHTML = "";
}

/* clearFields() function
------------------------------- */
var clearFields = function () {
    // Input Variables
    firstInput = $("firstname");
    lastInput = $("lastname");
    emailInput = $("email");
    cityInput = $("city");
    donationInput = $("donation");

    // Error Variables
    firstError = $("firstnameerror");
    lastError = $("lastnameerror");
    emailError = $("emailerror");
    cityError = $("cityerror");
    donationError = $("donationerror");
    endError = $("endmessage");

    // Clear inputs
    firstInput.value = "";
    lastInput.value = "";
    emailInput.value = "";
    cityInput.selectedIndex = 0;
    donationInput.value = "";

    // Clear errors
    firstError.innerHTML = "";
    lastError.innerHTML = "";
    emailError.innerHTML = "";
    cityError.innerHTML = "";
    donationError.innerHTML = "";
    endError.innerHTML = "";
}

/* On load of window, initiate call functions
------------------------------- */
window.onload = function () {
    $("addpatron").onclick = addPatrons;
    $("clearfields").onclick = clearFields;
}