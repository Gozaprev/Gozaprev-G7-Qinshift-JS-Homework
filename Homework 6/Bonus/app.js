function getRecipeDetails() {
    const recipeName = prompt("What is the name of the recipe?");
    while (recipeName === null || recipeName.trim() === "") {
        alert("Please enter a valid recipe name.");
        recipeName = prompt("What is the name of the recipe?");
    }
    let numberOfIngredients = Number(prompt("How many ingredients do we need for the recipe?"));
    while (isNaN(numberOfIngredients) || numberOfIngredients <= 0) {
        alert("Please enter a valid number of ingredients (greater than 0).");
        numberOfIngredients = Number(prompt("How many ingredients do we need for the recipe?"));
    }
    const ingredients = [];

    for (let i = 0; i < numberOfIngredients; i++) {
        const ingredient = prompt(`Enter ingredient ${i + 1}:`);
        if (ingredient === null || ingredient.trim() === "") {
            alert("Please enter a valid ingredient.");
            i--; // Decrement i to repeat the prompt for the same ingredient
        } else {
            ingredients.push(ingredient);
        }
    }

    // Display the recipe name
    document.getElementById("recipe-name").innerText = recipeName;

    // Display the ingredients in ul
    const ingredientList = document.getElementById("ingredient-list");
    for (const ingredient of ingredients) {
        const li = document.createElement("li");
        li.innerText = ingredient;
        ingredientList.appendChild(li);
    }
    // ingredients.forEach(ingredient => {
    //     const li = document.createElement("li");
    //     li.innerText = ingredient;
    //     ingredientList.appendChild(li);
    // });

    // Display the ingredients in a table
    const ingredientTable = document.getElementById("ingredient-table");

    for (const ingredient of ingredients) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerText = ingredient;
        tr.appendChild(td);
        ingredientTable.appendChild(tr);
    }
    // ingredients.forEach(ingredient => {
    //     const tr = document.createElement("tr");
    //     const td = document.createElement("td");
    //     td.innerText = ingredient;
    //     tr.appendChild(td);
    //     ingredientTable.appendChild(tr);
    // });
}

// Call the function to get recipe details
getRecipeDetails();