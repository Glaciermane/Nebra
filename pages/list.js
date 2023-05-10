function searchRankings() {
  // Suchbegriff aus dem Eingabefeld abrufen
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  
  // Alle Zeilen in der Rangliste ausblenden
  var rows = document.getElementsByClassName("ranking-row");
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "none";
  }
  
  // Zeile mit dem gesuchten Spieler anzeigen
  var playerRow = document.getElementById(searchInput);
  if (playerRow) {
    playerRow.style.display = "flex";
  }
}
