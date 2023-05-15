function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("rankingTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByClassName("column-cell-tier")[columnIndex];
      y = rows[i + 1].getElementsByClassName("column-cell-tier")[columnIndex];

      if (columnIndex === 2) { // Index 2 für Spalte "column-cell-tier"
        var tierOrder = ['s+', 's', 'a', 'b', 'c', 'd', 'e'];
        var xIndex = tierOrder.indexOf(x.innerHTML.toLowerCase());
        var yIndex = tierOrder.indexOf(y.innerHTML.toLowerCase());

        if (xIndex > yIndex) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

window.onload = function() {
  sortTable(2); // Sortiere nach Spalte "column-cell-tier" beim Laden der Seite
};
