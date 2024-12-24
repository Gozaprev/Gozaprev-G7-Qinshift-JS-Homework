// Select the first div
let firstDiv = document.getElementById('firstDiv');

// Select all paragraphs
let paragraphs = document.querySelectorAll('p');

// Select the last div in the section
let lastDiv = document.querySelector('section > div:last-of-type');

// Select the header 3 in the last div
let header3 = lastDiv.querySelector('h3');

// Select the header 1 in the last div
let header1 = lastDiv.querySelector('h1');

// Get the text from the first paragraph in the second div
let firstParagraphText = document.querySelector('.second-div .paragraph').innerText;

// Add the word "text" to the text element in the second div
let textElement = document.querySelector('.second-div text');
textElement.innerText += ' text';

// Change the text of the header 1 in the last div
header1.innerText = 'This has been changed!';

// Change the text of the header 3 in the last div
header3.innerText = 'This has also been changed!';
