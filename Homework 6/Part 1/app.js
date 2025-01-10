// // Select all <h1>, <h3>, and <p> elements
// const headers = document.querySelectorAll('h1, h3, p, .second-div text');

// // Loop through each selected element and change its text content
// headers.forEach(header => {
//     header.textContent = 'This text has been changed!';
// });


// Select all <h1>, <h3>, and <p> elements
const headers = document.querySelectorAll('h1, h3, p, .second-div text');

// Use a for...of loop to iterate over the NodeList
for (const header of headers) {
    header.textContent = 'This text has been changed!';
}
