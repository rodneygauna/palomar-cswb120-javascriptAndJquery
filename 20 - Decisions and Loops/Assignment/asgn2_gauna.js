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
    var petName1 = "";
    var petName2 = "";
    var petName3 = "";

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
    } else if (petCountInput < 0 || petCountInput > 3) {
        petCountError.innerHTML = "Please enter a valid number between 0 and 3";
        errorFoundFlag = true;
    } else {
        petCount = petCountInput;
    }

    // Loop through pet names and store the total number of pets to petCount
    // Store the pet names in petName1, petName2, and petName3 (if applicable)
    for (var i = 1; i <= petCount; i++) {
        var petNameInput = $("pet" + i).value;
        if (petNameInput == "") {
            $("pet" + i + "_error").innerHTML = "Please enter the name of pet #" + i;
            errorFoundFlag = true;
        } else {
            if (i == 1) {
                petName1 = petNameInput;
            } else if (i == 2) {
                petName2 = petNameInput;
            } else if (i == 3) {
                petName3 = petNameInput;
            }
        }
    }

    if (errorFoundFlag == false) {
        // Get today's date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        // Put the first and last names in the following format:  "Last, First"
        // Date is in the following format:  "MM-DD-YYYY"
        // For the count of pets, use the following format:  "Your Pet #i is named: petNamei." (where i is the number of the pet)
        // For example, if I had 2 pets named "Fluffy" and "Spot", the output would be:
        // "Your Name is listed as Gauna, Rodney and today's date is 9-4-2023. Your Pet #1 is named: Fluffy." "Your Pet #2 is named: Spot."

        if (petCount == 1) {
            outputMessage.innerHTML = "Your Name is listed as " + lastName + ", " + firstName + " and today's date is " + mm + "-" + dd + "-" + yyyy + ". Your Pet #1 is named " + petName1 + ".";
        } else if (petCount == 2) {
            outputMessage.innerHTML = "Your Name is listed as " + lastName + ", " + firstName + " and today's date is " + mm + "-" + dd + "-" + yyyy + ". Your Pet #1 is named " + petName1 + ". Your Pet #2 is named " + petName2 + ".";
        } else if (petCount == 3) {
            outputMessage.innerHTML = "Your Name is listed as " + lastName + ", " + firstName + " and today's date is " + mm + "-" + dd + "-" + yyyy + ". Your Pet #1 is named " + petName1 + ". Your Pet #2 is named " + petName2 + ". Your Pet #3 is named " + petName3 + ".";
        } else {
            outputMessage.innerHTML = "Your Name is listed as " + lastName + ", " + firstName + " and today's date is " + mm + "-" + dd + "-" + yyyy + ". You have no pets.";
        }
    }
}

// Clear error messages
function clearMessages() {
    $("firstname_error").innerHTML = "";
    $("lastname_error").innerHTML = "";
    $("numpets_error").innerHTML = "";
    $("pet1_error").innerHTML = "";
    $("pet2_error").innerHTML = "";
    $("pet3_error").innerHTML = "";
    $("message").innerHTML = "";
}

window.onload = function () {
    // Clear error messages and run processInfo function
    $("mybutton").onclick = function () {
        clearMessages();
        processInfo();
    }
}