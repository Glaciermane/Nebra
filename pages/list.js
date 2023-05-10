function searchRankings() {
  var input = document.getElementById("search-input").value.toLowerCase();
  var rows = document.getElementsByClassName("ranking-row");

  for (var i = 0; i < rows.length; i++) {
    var playerName = rows[i].getElementsByClassName("column-cell-name")[0].innerText.toLowerCase();

    if (playerName.includes(input)) {
      rows[i].style.display = ""; // Zeige die Zeile, wenn der Spielername übereinstimmt
    } else {
      rows[i].style.display = "none"; // Verstecke die Zeile, wenn der Spielername nicht übereinstimmt
    }
  }
}
