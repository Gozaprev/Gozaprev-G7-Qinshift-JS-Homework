function returnType(parameter) {

    console.log(`The type of the entered parameter ${parameter} is ${typeof(parameter)}`);
    return console.log("The type of the entered parameter is:", typeof(parameter));

    
}

returnType({});
returnType(true);
returnType(12345);
returnType("Hello");
returnType(undefined);
returnType(NaN);




let input = prompt("Please enter parameter and we will tell you the type");

function returnTypeOfValue(input) {

    console.log(`The type of the entered ${input} is ${typeof(input)}`);
    
}

returnTypeOfValue(input);