function showPopup() {
  var credentials = prompt("Login as Superuser\n");
  var username = credentials.split('\n')[0];
  var password = credentials.split('\n')[1];
  var superpass = "SUPER_PASS"; // Hier solltest du den tatsächlichen Superuser-Passwortwert verwenden
  const superpass = process.env.SUPER_PASS;

  // Überprüfen Sie hier die Superuser-Daten und führen Sie entsprechende Aktionen durch

  if (username === "superuser" && password === superpass) {
    alert("Superuser logged in!");
    // Superuser-Daten sind korrekt, führen Sie hier den gewünschten Code aus
    errorElement.textContent = ""; // Leeren Sie die Fehlermeldung
  } else {
    // Superuser-Daten sind nicht korrekt, zeigen Sie eine Fehlermeldung an
    alert("Wrong login data!");
  }
}
