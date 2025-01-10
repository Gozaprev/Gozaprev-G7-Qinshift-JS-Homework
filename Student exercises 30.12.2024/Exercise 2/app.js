// document.getElementById('saveBtn').addEventListener('click', function () {
//     const firstName = document.getElementById('firstName');
//     const lastName = document.getElementById('lastName');
//     const phoneNumber = document.getElementById('phoneNumber');

//     if (!firstName || !lastName || !phoneNumber) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // Validation for number of digits input
//     const phoneRegex = /^[0-9]{7}$/; 
//     if (!phoneRegex.test(phoneNumber)) {
//         alert('Please enter a valid phone number (7 digits).');
//         return;
//     }

//     // Create a new row for the contact
//     const contactList = document.getElementById('contactList');
//     const newRow = document.createElement('tr');

//     newRow.innerHTML = `
//         <td>${firstName}</td>
//         <td>${lastName}</td>
//         <td>${phoneNumber}</td>
//     `;

//     // Append the new row to the table
//     contactList.appendChild(newRow);

//     // Clear input fields
//     document.getElementById('firstName').value = '';
//     document.getElementById('lastName').value = '';
//     document.getElementById('phoneNumber').value = '';
// });

// /////////////////////////////////////////////////////

// const contacts = [];

// function addContact(firstName, lastName, phoneNumber) {
//     const contact = {
//         firstName,
//         lastName,
//         phoneNumber
//     };
//     contacts.push(contact);
//     displayContacts();
// }

// function displayContacts() {
//     const tableBody = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
//     tableBody.innerHTML = ''; // Clear existing contacts

//     contacts.forEach((contact, index) => {
//         const row = tableBody.insertRow();
//         row.insertCell(0).innerText = contact.firstName;
//         row.insertCell(1).innerText = contact.lastName;
//         row.insertCell(2).innerText = contact.phoneNumber;

//         const actionsCell = row.insertCell(3);
//         const editButton = document.createElement('button');
//         editButton.innerText = 'Edit';
//         editButton.onclick = () => editContact(index);
//         actionsCell.appendChild(editButton);

//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'Delete';
//         deleteButton.onclick = () => deleteContact(index);
//         actionsCell.appendChild(deleteButton);
//     });
// }

// function deleteContact(index) {
//     contacts.splice(index, 1);
//     displayContacts();
// }

// function editContact(index) {
//     const contact = contacts[index];
//     document.getElementById('firstName').value = contact.firstName;
//     document.getElementById('lastName').value = contact.lastName;
//     document.getElementById('phoneNumber').value = contact.phoneNumber;

//     // Remove the contact from the array to avoid duplication
//     deleteContact(index);
// }

// document.getElementById('saveBtn').addEventListener('click', () => {
//     const firstName = document.getElementById('firstName').value.trim();
//     const lastName = document.getElementById('lastName').value.trim();
//     const phoneNumber = document.getElementById('phoneNumber').value.trim();

//     // Validate input
//     if (!firstName || !lastName || !phoneNumber) {
//         alert("Please fill in all fields with valid values.");
//         return;
//     }

//     addContact(firstName, lastName, phoneNumber);

//     // Clear input fields
//     document.getElementById('firstName').value = '';
//     document.getElementById('lastName').value = '';
//     document.getElementById('phoneNumber').value = '';
// });


// ///////////////////////////////////////////////////////////////////

let contacts = [];

function addContact(firstName, lastName, phoneNumber) {
    let contact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };
    if (!firstName || !lastName || !phoneNumber) {
        alert('Please fill in all fields.');
        return;
    }

    // Validation for number of digits input
    const phoneRegex = /^[0-9]{7}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number (7 digits).');
        return;
    }
    contacts.push(contact);
    displayContacts();
}

function displayContacts() {
    let tableBody = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing contacts

    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = contact.firstName;
        row.insertCell(1).innerText = contact.lastName;
        row.insertCell(2).innerText = contact.phoneNumber;

        let actionsCell = row.insertCell(3);

        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function (index) { // Ova e Immediately invoked function expression (IIFE) so index kako parametar
            return function () {
                editContact(index);
            };
        }(i); // IIFE se povikuva za vrednost na i kako argument preku for-ot
        actionsCell.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function (index) {
            return function () {
                deleteContact(index);
            };
        }(i);
        actionsCell.appendChild(deleteButton);
    }
}

function deleteContact(index) {
    contacts.splice(index, 1); //Start position and number of elements to be removed
    displayContacts();
}

function editContact(index) {
    let contact = contacts[index];
    document.getElementById('firstName').value = contact.firstName;
    document.getElementById('lastName').value = contact.lastName;
    document.getElementById('phoneNumber').value = contact.phoneNumber;

    // Remove the contact from the array to avoid duplication
    deleteContact(index);
}

document.getElementById('saveBtn').addEventListener('click', function () {
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();


    addContact(firstName, lastName, phoneNumber);

    // Clear input fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
});
