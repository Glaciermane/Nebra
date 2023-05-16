function login(event) {
  event.preventDefault(); // Verhindert das Standard-Formularverhalten

  const username = document.getElementById('superuser').value;
  const password = document.getElementById('pass').value;
  const superpass = process.env.SUPER_PASS;

  if (username === 'superuser' && password === 'pass') {
    // Authentifizierung erfolgreich, weiterleiten zur geschützten Seite
    window.location.href = 'supervisor.html';
  } else {
    alert('Ungültige Anmeldeinformationen');
  }
}
