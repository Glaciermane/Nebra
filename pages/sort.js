// Finde alle Zeilen der Rangliste
const rankingRows = document.querySelectorAll('.ranking-row');

// Konvertiere die NodeList in ein Array, um Array-Funktionen verwenden zu können
const rowsArray = Array.from(rankingRows);

// Erstelle ein Objekt, um die Rangreihenfolge festzulegen
const rankOrder = {
  'S+': 1,
  'S': 2,
  'A': 3,
  'B': 4,
  'C': 5,
  'D': 6,
  'E': 7
};

// Sortiere die Zeilen basierend auf dem Rang
rowsArray.sort((a, b) => {
  const rankA = a.querySelector('.column-cell-tier').textContent.trim();
  const rankB = b.querySelector('.column-cell-tier').textContent.trim();
  return rankOrder[rankA] - rankOrder[rankB];
});

// Entferne vorhandene Zeilen aus dem DOM
rankingRows.forEach(row => {
  row.parentNode.removeChild(row);
});

// Füge die sortierten Zeilen in der richtigen Reihenfolge wieder in den DOM ein
const rankingContainer = document.querySelector('.ranking-container');
rowsArray.forEach(row => {
  rankingContainer.appendChild(row);
});
