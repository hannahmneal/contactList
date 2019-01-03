//--------------------------------- INSTRUCTIONS --------------------------------------------
// Loads existing contacts from storage and saves new ones. Each new contact should have an auto-generated identifier.
//-----------------------------------------------------------------------------

//--------------------------------- NOTES --------------------------------------------
// Interacts with database.json
//-----------------------------------------------------------------------------

console.log("contactCollection.js");

const contactData = {
    contactsFetch() {
        return fetch("http://localhost:8088/contacts")
        .then(contact => contact.json())
        .then(parsedContacts => {
            console.log(parsedContacts);
        })
    }
}

// const contactDataDisplay = document.querySelector("#contact-collection-container")

// contactData.contactsFetch().then(contacts
//     contacts.forEach(contact => {
//         console.log(contact);
//     }))

export default contactData

//---------------------------- "Scrap Paper" for Fetch Function -------------------------------------------------
// (To test code, highlight code and press "option/alt" key on keyboard and move code block up or down within contactData function)


//-----------------------------------------------------------------------------