document.getElementById("createTableButton").addEventListener("click", createTable);

function createTable() {
    // Get user input for rows and columns
    // const rows = Number(prompt("Enter the number of rows:"));
    // const columns = Number(prompt("Enter the number of columns:"));

    const rows = Number(document.getElementById("rows").value);
    const columns = Number(document.getElementById("columns").value);

    // Validate input
    // while (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    //     alert("Please enter valid positive numbers for rows and columns.");
    //     rows = Number(prompt("Enter the number of rows:"));
    //     columns = Number(prompt("Enter the number of columns:"));
    // }

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
   
    // Create a table element
    const table = document.createElement("table");

    // Populate the table with rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "8px";
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