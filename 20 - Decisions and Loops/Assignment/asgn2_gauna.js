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
            var errorSpan = document.createElement("span");
            // add an id to the span element
            errorSpan.id = "pet" + i + "_error";
            errorSpan.textContent = "Please enter the name of pet #" + i + ". ";

            // Append the <span> element next to the pet name input field
            petNameInput.parentNode.appendChild(errorSpan);
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
    /*
    I'm pretty sure I'm going too far down the rabbit hole with this one
    and beyond where we are in the course
    because we haven't been introduced to arrays and regular expressions yet.
    */

    // Remove the pet error spans so that they don't keep adding up
    var petErrorSpans = document.querySelectorAll("span[id^='pet']"); // Select all span tags that start with "pet"
    for (var i = 0; i < petErrorSpans.length; i++) {
        petErrorSpans[i].remove();
    }
    // Clear the error messages are in remain span tags
    var errorSpans = document.getElementsByTagName("span");
    console.log(typeof errorSpans);
    for (var i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerHTML = "";
    }
}

window.onload = function () {
    // Clear error messages and run processInfo function
    $("mybutton").onclick = function () {
        clearMessages();
        processInfo();
    }
}