function searchRankings() {
  var input = document.getElementById("search-input").value.toLowerCase();
  var rows = document.getElementsByClassName("ranking-row");

  for (var i = 0; i < rows.length; i++) {
    var playerNameElement = rows[i].getElementsByClassName("column-cell-name")[0];
    var top3Element = rows[i].getElementsByClassName("column-cell-top3")[0];

    if (playerNameElement && top3Element) {
      var playerName = playerNameElement.innerText.toLowerCase();
      var top3Text = top3Element.innerText.toLowerCase();

      if (playerName.includes(input) || top3Text.includes(input)) {
        rows[i].style.display = ""; // Zeige die Zeile, wenn der Spielername oder Top3 übereinstimmt
      } else {
        rows[i].style.display = "none"; // Verstecke die Zeile, wenn der Spielername oder Top3 nicht übereinstimmt
      }
    }
  }
}
