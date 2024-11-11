function filterTable() {
    // Get the input field and filter value
    let input = document.getElementById("table-filter");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("athlete-table");
    let rows = table.getElementsByTagName("tr");
 
    // Loop through all rows except the first (header)
    for (let i = 1; i < rows.length; i++) {
       let cells = rows[i].getElementsByTagName("td");
       let rowContainsFilter = false;
 
       // Loop through each cell in the row to check for filter match
       for (let j = 0; j < cells.length; j++) {
          if (cells[j]) {
             let cellContent = cells[j].textContent || cells[j].innerText;
             if (cellContent.toUpperCase().includes(filter)) {
                rowContainsFilter = true;
                break;
             }
          }
       }
 
       // Show or hide the row based on filter match
       rows[i].style.display = rowContainsFilter ? "" : "none";
    }
 }
 
 // Function to sort table by column index
 function sortTable(tableId, colIndex) {
    const table = document.getElementById(tableId);
    let switching = true, shouldSwitch, rows, i;
    let direction = "asc";
    let switchCount = 0;
 
    while (switching) {
       switching = false;
       rows = table.rows;
       for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          let x = rows[i].getElementsByTagName("TD")[colIndex];
          let y = rows[i + 1].getElementsByTagName("TD")[colIndex];
 
          if (direction === "asc") {
             if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
             }
          } else if (direction === "desc") {
             if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
             }
          }
       }
 
       if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchCount++;
       } else {
          if (switchCount === 0 && direction === "asc") {
             direction = "desc";
             switching = true;
          }
       }
    }
 }