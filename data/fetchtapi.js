// Funktion, die aufgerufen wird, wenn der "Refresh"-Button geklickt wird
function refreshData() {
  // API-URL für die GET-Anfrage
  var url = 'https://api.wynncraft.com/v2/';

  // GET-Anfrage senden
  fetch(url)
    .then(function(response) {
      // Überprüfen, ob die GET-Anfrage erfolgreich war
      if (response.ok) {
        // Response-Daten in JSON umwandeln
        return response.json();
      } else {
        throw new Error('Fehler bei der GET-Anfrage. Statuscode: ' + response.status);
      }
    })
    .then(function(data) {
      // Antwortdaten verarbeiten
      console.log(data); // Ausgabe der Antwortdaten in der Konsole

      // Weitere Verarbeitung der Daten
      // ...
    })
    .catch(function(error) {
      // Fehlerbehandlung
      console.error(error);
    });
}

