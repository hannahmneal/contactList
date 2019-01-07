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
createForm.innerHTML= `<form>
<input id="first-name-input" class="input" type="text" placeholder="First Name">
<input id="last-name-input" class="input" type="text" placeholder="Last Name">
<input id="address-input" class="input" type="text" placeholder="Address"></form>
<button id="submit-form-btn">Submit</button>`
//Try separating button from input fields
//If <form> tags are placed at the beginning and end of <input> fields but before <button>, the individual inputs (lines 42-45) work but the code on 37-38.

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
        // let formFields = document.querySelector(".input") //This works for all three boxes.
        //Trying jQuery instead:
        // let formFields = $("input").value; //This works for all three boxes.
        // Perhapt JS is trying to evaluate all the individual values for the input sections as ONE input and cannot work with querySelectorAll for this reason; Since I want to evaluate and search the database for each value individually anyway, it's probably more complicated and cumbersome to smoosh the input values together, anyway.

        // console.log(formFields);  // Returns the value for all three form inputs.
        
        // let submitForm = document.getElementById("submit-form-btn").addEventListener("click", function(event) {
            // let userInput = document.querySelectorAll("#input")   //Returns undefined when logged
            let firstNameInput = document.getElementById("first-name-input");   //This works.
            let lastNameInput = document.getElementById("last-name-input");
            let addressInput = document.getElementById("address-input");
            console.log(firstNameInput.value, lastNameInput.value, addressInput.value); // Works!
            
            // call personCheckAdd from contactList
        })
    // })


//------------------------------------------------------------------------------
//Each new contact is a new object in the contactData array.
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// POST new contact in form to the database.
//------------------------------------------------------------------------------

export default submitForm