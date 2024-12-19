// for (let i = 1; i <= 20; i++) {
//     // Check if the number is even
//     if (i % 2 === 0) {
//         console.log(i + "\n"); // Add a newline after even numbers
//     } else {
//         console.log(i + " "); // Add a space after odd numbers
//     }
// }


let output = "";

// Loop from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is even
    if (i % 2 === 0) {
        output += i + "\n"; // Add a newline after even numbers
    } else {
        output += i + " "; // Add a space after odd numbers
    }
}

console.log(output); 