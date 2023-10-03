// Shorthand for getElementById()
var $ = function (id) {
    return document.getElementById(id);
}

// Main Process Function
function processInfo() {
    // Global variables
    var firstName = "";
    var lastName = "";
    var petCount = 0;
    var petNames = "";

    // Input variables
    var firstNameInput = $("firstname").value;
    var lastNameInput = $("lastname").value;
    var petCountInput = $("numpets").value;

    // Error message variables
    var firstNameError = $("firstname_error");
    var lastNameError = $("lastname_error");
    var petCountError = $("numpets_error");

    // Output message variables
    var outputMessage = $("message");

    // Error flag
    var errorFoundFlag = false;

    // Validate firstname
    if (firstNameInput == "") {
        firstNameError.innerHTML = "Please enter first name";
        errorFoundFlag = true;
    } else {
        firstName = firstNameInput;
    }

    // Validate lastname
    if (lastNameInput == "") {
        lastNameError.innerHTML = "Please enter last name";
        errorFoundFlag = true;
    } else {
        lastName = lastNameInput;
    }

    // Validate numpets
    if (petCountInput == "") {
        petCountError.innerHTML = "Please enter the number of pets you have";
        errorFoundFlag = true;
    } else if (petCountInput < 0 || petCountInput > 3 || isNaN(petCountInput)) { // NaN stands for "not a number"
        petCountError.innerHTML = "Please enter a valid number between 0 and 3";
        errorFoundFlag = true;
    } else {
        petCount = petCountInput;
    }

    // Loop through pet names and store the total number of pets to petCount
    // Store the pet names in petNamei, where i is the number of the pet
    for (var i = 1; i <= petCount; i++) {
        var petNameInput = $("pet" + i)
        if (petNameInput.value == "") {
            // I'm not sure if placing the error message in the output message
            // is okay, but I'm not sure how else to add it after the input element.
            petErrorMsg = '<span id="pet' + i + '_error">Please enter the name of pet #' + i + '. </span>';
            outputMessage.innerHTML += petErrorMsg;

            errorFoundFlag = true;
        } else {
            // store pet name in petNamei where i is the number of the pet
            petNames += " Your Pet #" + i + " is named " + petNameInput.value + ".";
        }
    }

    if (errorFoundFlag == false) {
        // Get today's date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        // Output message
        msgText = "Your Name is listed as " + lastName + ", " + firstName + " and today's date is " + mm + "-" + dd + "-" + yyyy + "." + petNames;
        outputMessage.innerHTML = msgText;
    }
}

// Clear error messages
function clearMessages() {
    $("firstname_error").innerHTML = "";
    $("lastname_error").innerHTML = "";
    $("numpets_error").innerHTML = "";
    $("message").innerHTML = "";
}

window.onload = function () {
    // Clear error messages and run processInfo function
    $("mybutton").onclick = function () {
        clearMessages();
        processInfo();
    }
}