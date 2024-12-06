let userPrompt = prompt("Please enter your birth year and get your Chinese zodiac sign:");
let numberPrompt = Number(userPrompt);
let numberPromptLength = Math.ceil(Math.log10(numberPrompt + 1));
// console.log(numberPromptLength);
let chieneseZodiacYear = (numberPrompt - 4) % 12;
// console.log(chieneseZodiacYear);

switch (chieneseZodiacYear) {
    
    default:
        console.log("Invalid input, please enter your birth year:");
        break;
    case 0:
        console.log("Your Chinese zodiac sign is Rat");
        break;
    case 1:
        console.log("Your Chinese zodiac sign is Ox");
        break;
    case 2:
        console.log("Your Chinese zodiac sign is Tiger");
        break;
    case 3:
        console.log("Your Chinese zodiac sign is Rabit");
        break;
    case 4:
        console.log("Your Chinese zodiac sign is Dragon");
        break;
    case 5:
        console.log("Your Chinese zodiac sign is Snake");
        break;
    case 6:
        console.log("Your Chinese zodiac sign is Horse");
        break;
    case 7:
        console.log("Your Chinese zodiac sign is Goat");
        break;
    case 8:
        console.log("Your Chinese zodiac sign is Monkey");
        break;
    case 9:
        console.log("Your Chinese zodiac sign is Rooster");
        break;
    case 10:
        console.log("Your Chinese zodiac sign is Dog");
        break;
    case 11:
        console.log("Your Chinese zodiac sign is Pig");
        break;
}
