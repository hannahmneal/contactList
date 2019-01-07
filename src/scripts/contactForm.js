//-------------------------------- INSTRUCTIONS ---------------------------------------------
// This component contains a form and a submit button. When "submit" is pressed it adds a new contact to storage. It should import the ContactCollection component.

//-----------------------------------------------------------------------------

//------------------------------ NOTES -----------------------------------------------
// Create a display container for a form in index.html
// Create a form with a submit button
// Create an eventHandler for the submit button
//-----------------------------------------------------------------------------

import contactCollection from "./contactCollection"
import contactData from "./contactCollection";
console.log("contactForm.js");

let createForm = document.getElementById("display-container");
createForm.innerHTML= `
<input id="first-name-input" class="input" type="text" placeholder="First Name">
<input id="last-name-input" class="input" type="text" placeholder="Last Name">
<input id="address-input" class="input" type="text" placeholder="Address">
<button id="submit-form-btn">Submit</button>`

//------------------------------------------------------------------------------
// Alternative code for button:

// let submitButton = document.createElement("button");
// submitButton.classList.add("submit-form-btn");
// console.log(submitButton);
// submitButton.addEventListener("click", eventListener.handleFormSubmission);
// console.log(submitButton);
// displayContainer.appendChild(submitButton);
//------------------------------------------------------------------------------

    let submitForm = document.getElementById("submit-form-btn").addEventListener("click", function(event) {
        let formFields = document.querySelectorAll("#input");  //This works for all three boxes.
        console.log(formFields.value);  // Returns the value for all three form inputs.
    })

//------------------------------------------------------------------------------
//Each new contact is a new object in the contactData array.
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// POST new contact in form to the database.
//------------------------------------------------------------------------------

export default submitForm