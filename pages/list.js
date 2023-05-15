function searchRankings() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var names = document.getElementsByClassName("column-cell-name");

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    console.log(name); // Füge diese Zeile hinzu
    if (name.innerText.toLowerCase().indexOf(input) > -1) {
      name.parentElement.style.display = "";
    } else {
      name.parentElement.style.display = "none";
    }
  }
}
