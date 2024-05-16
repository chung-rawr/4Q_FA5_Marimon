let contacts = [];

function addContact() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name !== "") {
        if (contacts.length >= 7) {
            contacts.shift(); 
        }
        contacts.push(name);
        displayContacts();
        nameInput.value = ""; 
    } else {
        alert("Please enter a name.");
    }
}

function removeContact() {
    if (contacts.length > 0) {
        contacts.pop(); 
        displayContacts();
    }
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ""; 
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = contact;
        contactList.appendChild(li);
    });
}
