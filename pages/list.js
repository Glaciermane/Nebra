function searchRankings() {
  // Wert aus der Suchleiste auslesen
  var searchValue = document.getElementById('search-input').value.toLowerCase();

  // Alle Ranking-Reihen durchlaufen und überprüfen, ob der Spielername enthalten ist
  var rows = document.getElementsByClassName('ranking-row');
  for (var i = 0; i < rows.length; i++) {
    var playerName = rows[i].getElementsByClassName('ranking-column')[0].innerText.toLowerCase();
    if (playerName.includes(searchValue)) {
      rows[i].style.display = ''; // Zeile anzeigen
    } else {
      rows[i].style.display = 'none'; // Zeile ausblenden
    }
  }
}
