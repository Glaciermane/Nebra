function searchRankings() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var rows = document.getElementsByClassName("ranking-row");

  for (var i = 0; i < rows.length; i++) {
    var nameCell = rows[i].getElementsByClassName("column-cell-name")[0];
    var top3Cell = rows[i].getElementsByClassName("column-cell-top3")[0];

    if (nameCell && top3Cell) { // Überprüfen, ob die Zellen gefunden wurden
      if (nameCell.textContent.toLowerCase().indexOf(input) > -1 || top3Cell.textContent.toLowerCase().indexOf(input) > -1) {
        rows[i].style.display = ""; // Zeile anzeigen
      } else {
        rows[i].style.display = "none"; // Zeile ausblenden
      }
    }
  }
}
