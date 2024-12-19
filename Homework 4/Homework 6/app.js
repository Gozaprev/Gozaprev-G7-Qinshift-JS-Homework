let firstNameArr = ["Bob", "Jill"];
let lastNameArr = ["Gregory", "Wurtz"];

function combineNames(firstNames, lastNames) {
    var fullNames = []; // Initialize an empty array to hold the full names

    for (let i = 0; i < firstNames.length; i++) {
        // Check if both arrays have the same length
        if (i < lastNames.length) {
            // Create the full name with a numeric prefix
            let fullName = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
            fullNames.push(fullName); // Add the full name to the array
        }
    }

    return fullNames; // Return the array of full names
}



let fullNameArr = combineNames(firstNameArr, lastNameArr);
console.log(fullNameArr); // Output: ["1. Bob Gregory", "2. Jill Wurtz"]
