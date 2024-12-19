function concatenateStrings(array) {
    // Check if the input is an array
    if (!Array.isArray(array)) {
        console.error("Input must be an array.");
        return;
    }

    let result = "";

    for (let i = 0; i < array.length; i++) {
        
        if (typeof array[i] === 'string') {
            result += array[i] + " "; // Add a space after each string
        } else {
            console.error("Array must contain only strings.");
            return;
        }
    }

    // Trim any trailing space and return the result
    return result.trim();
    // return result;
}

let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
let concatenatedString = concatenateStrings(stringArray);
console.log(concatenatedString); // Output: "Hello there students of SEDC !"
