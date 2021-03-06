//--------------------------------- INSTRUCTIONS --------------------------------------------
// Loads existing contacts from storage and saves new ones. Each new contact should have an auto-generated identifier.
//-----------------------------------------------------------------------------

//--------------------------------- NOTES --------------------------------------------
// This is our Data component. It interacts with database.json.
//-----------------------------------------------------------------------------

console.log("contactCollection.js");

const contactData = {
    contactsFetch() {
        return fetch("http://localhost:8088/contacts")
        .then(contact => contact.json())
        .then(parsedContacts => {
            console.log(parsedContacts);
            //GET, POST, DELETE functions in contactList
            return parsedContacts;
        })
    }
}

let contactsDiv = document.querySelector("#contact-collection-container")

contactData.contactsFetch().then(contact => {
    contact.forEach(contacts => {
        contactsDiv.innerHTML += `<h4>${contacts.firstName}</h4>`
        contactsDiv.innerHTML += `<h4> ${contacts.lastName}</h4>`
        contactsDiv.innerHTML += `<p>${contacts.address}</p>`
    })
});

export default contactData