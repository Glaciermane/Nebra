document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const loginButton = loginForm.querySelector('button[type="submit"]');
  loginButton.onclick = login;
});

function login(event) {
  event.preventDefault(); // Verhindert das Standard-Formularverhalten

  const username = document.getElementById('superuser').value;
  const password = document.getElementById('pass').value;
  const superpass = process.env.SUPER_PASS;

  if (username === 'superuser' && password === superpass) {
    // Authentifizierung erfolgreich, weiterleiten zur geschützten Seite
    window.location.href = 'supervisor.html';
  } else {
    alert('Ungültige Anmeldeinformationen');
  }

  return false; // Verhindert das erneute Laden der Seite
}
