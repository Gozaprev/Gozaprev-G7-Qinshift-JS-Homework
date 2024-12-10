// Solution 1

let userPrompt = prompt("Please enter the number of human years of your dog, to calculate the dog years:");
let numberPrompt = Number(userPrompt);

if (Number.isNaN(numberPrompt)) {
    console.log("Invalid input, please enter valid number:");
} else {
    function calculateDogAge(numberPrompt) {
        let DogAge = numberPrompt * 7;
        console.log(`Your dog has ${DogAge} dog years`);
        return DogAge;

    }

    calculateDogAge(numberPrompt);

}

////////////////////////////////////////////////////////////

// Solution 2

let userPromptNumberOfYears = prompt("Please enter the number of years");
let typeOfConversion = prompt("Enter the type of conversion of age: put 1 for human to dog years or 2 for dog to human years");
// let numberPromptYears = Number(userPromptNumberOfYears)
// let numberPromptYearsType = Number(typeOfConversion);


function calculateAges() {

    // let userPromptNumberOfYears = prompt("Please enter the number of years");
    // let typeOfConversion = prompt("Enter the type of conversion of age: put 1 for human to dog years or 2 for dog to human years");
    let numberPromptYears = Number(userPromptNumberOfYears)
    let numberPromptYearsType = Number(typeOfConversion);

    if (Number.isNaN(numberPromptYears && numberPromptYearsType)) {
        console.log("Invalid input, please enter valid number:");
    } else if (numberPromptYearsType === 1) {
        let humanToDogYearsConversion = numberPromptYears * 7;
        console.log(`Your dog has ${humanToDogYearsConversion} dog years`);
        // return humanToDogYearsConversion;
    } else if (numberPromptYearsType === 2) {
        let DogToHumanYearsConversion = numberPromptYears / 7;
        console.log(`The human years are ${DogToHumanYearsConversion}`);
        // return DogToHumanYearsConversion;

    } else if (numberPromptYearsType !==(1 || 2)) {
        console.log("Please enter 1 or 2");

    }
    // return numberPromptYears;

}

calculateAges();

/////////////////////////////////////////////////////////////////

// Solution 3


function calculateAge(age, type) {
    if (type === "humanToDog") {
        // Convert human age to dog years (1 human year = 7 dog years)
        let dogAge = age * 7;
        console.log(`Your dog is ${dogAge} years old in dog years.`);
        return dogAge;
    } else if (type === "dogToHuman") {
        // Convert dog age to human years (1 dog year = 1/7 human years)
        let humanAge = age / 7;
        console.log(`Your dog is approximately ${humanAge} years old in human years.`);
        return humanAge;
    } else {
        console.log("Please specify whether you want to convert from 'humanToDog' or 'dogToHuman'.");
    }
}


calculateAge(5, "humanToDog"); // Convert 5 human years to dog years
calculateAge(35, "dogToHuman"); // Convert 35 dog years to human years