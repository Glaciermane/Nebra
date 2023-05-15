// list.js

function searchRankings() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var rows = document.getElementsByClassName("ranking-row");

  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].getElementsByClassName("column-cell-name")[0];
    if (name.innerText.toLowerCase().indexOf(input) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
