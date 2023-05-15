function searchRankings() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var names = document.getElementsByClassName("column-cell-name column-cell-tier");

  for (var i = 0; i < names.length; i++) {
    var name = names[i].innerText.toLowerCase();
    var row = names[i].parentElement;

    if (name.indexOf(input) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
