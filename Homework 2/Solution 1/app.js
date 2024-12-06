let userPrompt = prompt("Please enter your birth year and get your Chinese zodiac sign:");
let numberPrompt = Number(userPrompt);
let numberPromptLength = Math.ceil(Math.log10(numberPrompt + 1));
// console.log(numberPromptLength);
let chieneseZodiacYear = (numberPrompt - 4) % 12;
// console.log(chieneseZodiacYear);

if (Number.isNaN(numberPrompt)) {
    console.log("Invalid input, please enter your birth year:");
} else if (numberPromptLength > 4) {
    console.log("Please enter 4 digit number");
    let userPrompt = prompt("You have entered more than 4 digits. Please enter your birth year and get your Chinese zodiac sign:");

} else if (chieneseZodiacYear === 0) {
    console.log("Your Chinese zodiac sign is Rat");
} else if (chieneseZodiacYear === 1) {
    console.log("Your Chinese zodiac sign is Ox");
} else if (chieneseZodiacYear === 2) {
    console.log("Your Chinese zodiac sign is Tiger");
} else if (chieneseZodiacYear === 3) {
    console.log("Your Chinese zodiac sign is Rabit");
} else if (chieneseZodiacYear === 4) {
    console.log("Your Chinese zodiac sign is Dragon");
} else if (chieneseZodiacYear === 5) {
    console.log("Your Chinese zodiac sign is Snake");
} else if (chieneseZodiacYear === 6) {
    console.log("Your Chinese zodiac sign is Horse");
} else if (chieneseZodiacYear === 7) {
    console.log("Your Chinese zodiac sign is Goat");
} else if (chieneseZodiacYear === 8) {
    console.log("Your Chinese zodiac sign is Monkey");
} else if (chieneseZodiacYear === 9) {
    console.log("Your Chinese zodiac sign is Rooster");
} else if (chieneseZodiacYear === 10) {
    console.log("Your Chinese zodiac sign is Dog");
} else if (chieneseZodiacYear === 11) {
    console.log("Your Chinese zodiac sign is Pig");
} else {
    console.log("Error");
}



