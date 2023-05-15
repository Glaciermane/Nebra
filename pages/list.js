function searchRankings() {
  var input, filter, table, rows, i, nameColumn, playerName;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("rankingTable");
  rows = table.getElementsByClassName("ranking-row");

  for (i = 0; i < rows.length; i++) {
    nameColumn = rows[i].getElementsByClassName("column-name")[0];
    playerName = nameColumn.textContent || nameColumn.innerText;

    if (playerName.toUpperCase().indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
