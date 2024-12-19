// let arr = [3, 5, 6, 8, 11, "text", null, undefined, {}, []];
// function sumMaxMin(arr) {
//     // Filter the array to keep only numbers
//     let numbers = arr.filter(function (item) {
//         return typeof item === 'number' && !isNaN(item);
//     });

//     // Check if there are any valid numbers in the array
//     if (numbers.length === 0) {
//         return "No valid numbers in the array.";
//     }

//     let max = Math.max.apply(null, numbers);
//     let min = Math.min.apply(null, numbers); // the sample array has null inside

//     let sum = max + min;

//     return "Max: " + max + ", Min: " + min + ", Sum: " + sum;
// }



// let result = sumMaxMin(arr);
// console.log(result); 

let arr = [3, 5, 6, 8, 11, "text", null, undefined, {}, []];

function sumMaxMin(arr) {
    let max = -Infinity; // Initialize max to the smallest possible number
    let min = Infinity;  // Initialize min to the largest possible number
    let hasValidNumber = false; // Flag to check if we have at least one valid number


    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        // Check if the item is a valid number
        if (typeof item === 'number' && !isNaN(item)) {
            hasValidNumber = true; // Set to true
            // Update max and min
            if (item > max) {
                max = item;
            };
            if (item < min) {
                min = item;
            };
            // } else if (!hasValidNumber) {
            //     return "No valid numbers in the array.";
            // }
        }
    }


    // Check if we found any valid numbers
    if (!hasValidNumber) {
        return "No valid numbers in the array.";
    }

    let sum = max + min;
    return "Max: " + max + ", Min: " + min + ", Sum: " + sum;
}

let result = sumMaxMin(arr);
console.log(result);

