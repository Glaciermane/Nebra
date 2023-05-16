document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite nach dem Absenden des Formulars

  var superuser = document.getElementById("superuser").value;
  var pass = document.getElementById("pass").value;
  var errorElement = document.getElementById("error-message");

  // Überprüfen Sie hier die Superuser-Daten und führen Sie entsprechende Aktionen durch

  if (superuser === "admin" && pass === "12345") {
    // Superuser-Daten sind korrekt, führen Sie hier den gewünschten Code aus
    errorElement.textContent = ""; // Leeren Sie die Fehlermeldung
    console.log("Superuser eingeloggt!");
  } else {
    // Superuser-Daten sind nicht korrekt, zeigen Sie eine Fehlermeldung an
    errorElement.textContent = "Falsche Superuser-Daten!";
  }
});
