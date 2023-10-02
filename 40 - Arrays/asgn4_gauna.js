/* Assignment 4
Will need to:
 - allow a user to click one of four pictures
 - each time a picture is clicked, its name is stored as an element in an array
 - any time the clicks "Show Me the List" button, wil display the current contents of the arrya in a specific format
*/

/* Shorthand for getElementById()
------------------------------- */
var $ = function (id) {
    return document.getElementById(id);
}


/* Global Variables
------------------------------- */
var BeatlesArray;


/* Function - Image Click
------------------------------- */
function imageClick() {
    // Set all images back to original state
    $("john").border = "0px";
    $("paul").border = "0px";
    $("george").border = "0px";
    $("ringo").border = "0px";

    // Set the border of the clicked image
    this.border = '4px';
    this.style.color = 'yellow';

    // Add the id of the clicked image to the array
    BeatlesArray.push(this.id);
}


/* Function - Show List
------------------------------- */
function showList() {
    // Create the string variable
    var list = "";

    // Loop through the array
    for (var i = 0; i < BeatlesArray.length; i++) {
        // Add the name to the string variable
        // This was the original code, but it didn't capitalize the first letter
        // list += (i + 1) + ". " + BeatlesArray[i];
        // charAt() - https://www.w3schools.com/jsref/jsref_charat.asp
        // toUpperCase() - https://www.w3schools.com/jsref/jsref_touppercase.asp
        // slice() - https://www.w3schools.com/jsref/jsref_slice_string.asp
        list += (i + 1) + ". " + BeatlesArray[i].charAt(0).toUpperCase() + BeatlesArray[i].slice(1);

        // Add a comma if not the last element
        if (i != BeatlesArray.length - 1) {
            list += ", ";
        }
    }

    // Display the string variable
    $("list").innerHTML = list;
}


/* Function - Window Load
------------------------------- */
window.onload = function () {
    // Attach event handlers to the buttons
    $("john").onclick = imageClick;
    $("paul").onclick = imageClick;
    $("george").onclick = imageClick;
    $("ringo").onclick = imageClick;
    $("showlist").onclick = showList;
    // Create the empty array
    BeatlesArray = new Array();
}
