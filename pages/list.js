function searchRankings() {
  var input, filter, table, tr, tdName, tdTop3, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("rankingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    tdName = tr[i].getElementsByTagName("td")[0];
    tdTop3 = tr[i].getElementsByTagName("td")[2];

    if (tdName || tdTop3) {
      if (tdName.innerHTML.toUpperCase().indexOf(filter) > -1 || tdTop3.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
