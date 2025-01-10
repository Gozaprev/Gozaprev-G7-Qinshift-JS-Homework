function createTable() {
    // Get user input for rows and columns
    const rows = Number(prompt("Enter the number of rows:"));
    const columns = Number(prompt("Enter the number of columns:"));

    // Validate input
    while (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        rows = Number(prompt("Enter the number of rows:"));
        columns = Number(prompt("Enter the number of columns:"));
    }

   
    // Create a table element
    const table = document.createElement("table");

    // Populate the table with rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i + 1} Column-${j + 1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Clear previous table if exists and append the new table
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table
    tableContainer.appendChild(table);
}