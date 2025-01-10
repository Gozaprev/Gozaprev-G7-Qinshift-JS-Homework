// Example array
const numbers = [2, 4, 5];

// Get the list element
const numberList = document.getElementById('numberList');
let sum = 0;
let equation = '';

for (let i = 0; i < numbers.length; i++) { // for (const number of numbers) 
    const number = numbers[i];
    const listItem = document.createElement('li');
    listItem.textContent = number;
    numberList.appendChild(listItem);
    sum += number;

    // The equation string
    equation += number;
    
    if (i < numbers.length - 1) {
        equation += ' + '; // za + da bide staven pomegju broevite i ne na kraj
    }
}

// Print out the sum of all of the numbers below the list
document.getElementById('sum').textContent = 'Sum: ' + sum;

// Print the whole mathematical equation
equation += ' = ' + sum;
document.getElementById('equation').textContent = 'Equation: ' + equation;




// ///////////////////////////////////////////////

// // Print all numbers from the array in a list element
// numbers.forEach((number, index) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = number;
//     numberList.appendChild(listItem);
//     sum += number;

//     // Build the equation string
//     equation += number;
//     if (index < numbers.length - 1) {
//         equation += ' + ';
//     }
// });

// // Print out the sum of all of the numbers below the list
// document.getElementById('sum').textContent = 'Sum: ' + sum;

// // Print the whole mathematical equation
// equation += ' = ' + sum;
// document.getElementById('equation').textContent = 'Equation: ' + equation;


