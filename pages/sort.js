window.onload = function() {
      function sortTable() {
        var table = document.getElementById("tablesort");
        var tbody = table.getElementsByTagName("tbody")[0];
        var rows = Array.from(tbody.getElementsByTagName("tr"));

        var tierOrder = {
          "S+ Tier": 0,
          "S  Tier": 1,
          "A  Tier": 2,
          "B  Tier": 3,
          "C  Tier": 4,
          "D  Tier": 5,
          "E  Tier": 6
        };

        rows.sort(function(a, b) {
          var tierA = a.getElementsByClassName("column-cell-tier")[0].innerHTML;
          var tierB = b.getElementsByClassName("column-cell-tier")[0].innerHTML;

          return tierOrder[tierA] - tierOrder[tierB];
        });

        for (var i = 0; i < rows.length; i++) {
          tbody.appendChild(rows[i]);
        }
      }

      sortTable();
    };
