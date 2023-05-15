function searchRankings() {
  // Eingabewert aus dem Suchfeld abrufen
  var input = document.getElementById("searchInput").value.toLowerCase();

  // Alle Zeilen der Tabelle abrufen
  var rows = document.getElementsByClassName("ranking-row");

  // Schleife über alle Zeilen
  for (var i = 0; i < rows.length; i++) {
    var nameCell = rows[i].getElementsByClassName("column-cell-name")[0];
    var top3Cell = rows[i].getElementsByClassName("column-cell-top3")[0];

    // Prüfen, ob der Name oder der Top 3-Wert dem Suchbegriff entsprechen
    if (nameCell.textContent.toLowerCase().indexOf(input) > -1 || top3Cell.textContent.toLowerCase().indexOf(input) > -1) {
      rows[i].style.display = ""; // Zeile anzeigen
    } else {
      rows[i].style.display = "none"; // Zeile ausblenden
    }
  }
}
