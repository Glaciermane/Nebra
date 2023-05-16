import superpass from './config.js';

console.log('pass:', superpass);
// Weitere Aktionen mit dem Passwort durchführen



document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Standard-Formularverhalten

  const username = document.getElementById('superuser').value;
  const password = document.getElementById('pass').value;

  // Hier können Sie den Benutzernamen und das Passwort überprüfen
  // Verwenden Sie beispielsweise AJAX, um eine Anfrage an den Server zu senden

  if (username === 'superuser' && password === superpass) {
    // Authentifizierung erfolgreich, weiterleiten zur geschützten Seite
    window.location.href = 'supervisor.html';
  } else {
    alert('Ungültige Anmeldeinformationen');
  }
});
