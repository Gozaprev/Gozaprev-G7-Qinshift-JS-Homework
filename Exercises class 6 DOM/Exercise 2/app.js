function weightInChickens() {
    // Prompt the user to enter weight in kilograms
    let weightInKg = Number(prompt("Enter weight in kilograms:"));
    
    // Check if the input is a valid number
    if (isNaN(weightInKg) || weightInKg < 0) {
        document.getElementById("result").innerText = "Please enter a valid positive number";
        return;
    }

    // Calculate weight in chickens (1 chicken = 0.5 kg)
    let weightInChickens = weightInKg / 0.5;

    // Display the result in the HTML
    document.getElementById("result").innerText = `Weight in chickens: ${weightInChickens} chickens`;
}