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
            // console.log(parsedContacts);

            //GET, POST, DELETE functions in contactList
        })
    }
}

export default contactData