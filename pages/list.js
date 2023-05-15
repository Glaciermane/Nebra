function searchRankings() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var rows = document.getElementsByClassName("ranking-row");

  for (var i = 0; i < rows.length; i++) {
    var playerNameElement = rows[i].getElementsByClassName("column-cell-name column-cell-top3")[0];
    
    if (playerNameElement) {
      var playerName = playerNameElement.innerText.toLowerCase();

      if (playerName.includes(input)) {
        rows[i].style.display = ""; // Zeige die Zeile, wenn der Spielername übereinstimmt
      } else {
        rows[i].style.display = "none"; // Verstecke die Zeile, wenn der Spielername nicht übereinstimmt
      }
    }
  }
}
