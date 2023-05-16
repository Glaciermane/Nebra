function login() {
  var superuser = document.getElementById("superuser").value;
  var pass = document.getElementById("pass").value;

  // Überprüfen Sie hier die Superuser-Daten und führen Sie entsprechende Aktionen durch

  if (superuser === "admin" && pass === "12345") {
    // Superuser-Daten sind korrekt, führen Sie hier den gewünschten Code aus
    console.log("Superuser eingeloggt!");
  } else {
    // Superuser-Daten sind nicht korrekt, zeigen Sie eine Fehlermeldung an
    console.log("Falsche Superuser-Daten!");
  }
}
