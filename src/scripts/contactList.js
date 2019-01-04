//---------------------------- INSTRUCTIONS -------------------------------------------------
// This component displays all contacts. It should import contact and contactCollection.
//-----------------------------------------------------------------------------

//------------------------------- NOTES ----------------------------------------------
// The dataset is called here and appears as a "list" (an array).
//-----------------------------------------------------------------------------
import contact from "./contact"
import contactCollection from "./contactCollection"
import contactData from "./contactCollection";

console.log("contactList.js");

//---------------------------------------------------------------------------------------------------------
contactCollection.contactsFetch()

// GET, POST, DELETE functions from contactCollection

// Variables:
// searchContact        Takes the value of user's form input and sends to contactCollection as a GET. Database is checked for objects and properties === to user's input.
    // modifyContact    Follow-up function/conditional for searchContact: if no match found, proceed with createNewContact. If a match is found, provide option to modify contact.
// addNewContact     Takes the value of user's form input and sends it to contactCollection as a POST.
// deleteContact        "" DELETE request.
//---------------------------------------------------------------------------------------------------------

// HN 12-3-18 20:00 CURRENT GOAL: Simply display one object property value from the contactData array (index, name, id, address, etc.) in the console.

// contactData = [ {id,name,address}, {...}]

const searchContact = "";

