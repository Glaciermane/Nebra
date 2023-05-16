function showPopup() {

  const superuser = document.getElementById('superuser').value;
  const password = document.getElementById('pass').value;
  const superpass = process.env.SUPER_PASS;

  // Überprüfen Sie hier die Superuser-Daten und führen Sie entsprechende Aktionen durch

  if (superuser === "superuser" && password === superpass) {
    alert("Superuser logged in!");
    // Superuser-Daten sind korrekt, führen Sie hier den gewünschten Code aus
    errorElement.textContent = ""; // Leeren Sie die Fehlermeldung
  } else {
    // Superuser-Daten sind nicht korrekt, zeigen Sie eine Fehlermeldung an
    alert("Wrong login data!");
  }
});
