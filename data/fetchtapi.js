// Die gewünschte Benutzer- oder UUID-Variable
const usernameOrUUID = 'example';

// API-Request durchführen
fetch(`https://api.wynncraft.com/v2/player/${usernameOrUUID}/stats`)
  .then(response => response.json())
  .then(data => {
    // Daten verarbeiten und anzeigen
    const dataContainer = document.getElementById('data-container');

    // Beispielhafte Verarbeitung der Daten
    const playerStats = data.data[0].stats;
    const statKeys = Object.keys(playerStats);

    statKeys.forEach(statKey => {
      const listItem = document.createElement('p');
      listItem.textContent = `${statKey}: ${playerStats[statKey]}`;
      dataContainer.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Fehler beim Abrufen der API-Daten:', error);
  });
