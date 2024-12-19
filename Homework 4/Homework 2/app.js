// Function to validate if a number is valid
function validateNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

validateNumber(20);
// console.log(`The entered is ${typeof(validateNumber(20))}`);
console.log(`The entered is ${validateNumber(20)} input`);


// Calculate the sum of an array of 5 numbers
function sumArray(numbers) {
    // Check if the input is an array and has exactly 5 elements
    if (!Array.isArray(numbers) || numbers.length !== 5) {
        console.error("Input must be an array of exactly 5 numbers.");
        return;
    }

    // Validate each number in the array
    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i])) {
            alert("Error: One of the numbers is invalid.");
            return;
        }
    }

    // Calculate the sum
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    
    // Print the result
    console.log("The sum is: " + sum);
    
}

let numbersArray = [10, 20, 30, 40, 50]; 
sumArray(numbersArray);
