//-------------------------------- INSTRUCTIONS ---------------------------------------------
// This component contains a form and a submit button. When "submit" is pressed it adds a new contact to storage. It should import the ContactCollection component.

//-----------------------------------------------------------------------------

//------------------------------ NOTES -----------------------------------------------
// Create a display container for a form in index.html
// Create a form with a submit button
// Create an eventHandler for the submit button
//-----------------------------------------------------------------------------

import contactCollection from "./contactCollection"
console.log("contactForm.js");

let createForm = document.getElementById("display-container");
createForm.innerHTML= `
<input id="first-name-input" type="text" placeholder="First Name">
<input id="last-name-input" type="text" placeholder="Last Name">
<input id="address-input" type="text" placeholder="Address">
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

let submitBtn = document.getElementById("submit-form-btn").addEventListener("click", function(event) {
    // let userInput = document.querySelectorAll("input")   //Returns undefined when logged
    let firstNameInput = document.getElementById("first-name-input");   //This works.
    let lastNameInput = document.getElementById("last-name-input");
    let addressInput = document.getElementById("address-input");
    console.log(firstNameInput.value, lastNameInput.value, addressInput.value); // Works!
})

//------------------------------------------------------------------------------
//Each new contact is a new object in the contactData array.
//------------------------------------------------------------------------------










