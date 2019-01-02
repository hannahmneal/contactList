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
<input id="phone-input" type="text" placeholder="Phone">
<button id="submit-form-btn">Submit</button>`