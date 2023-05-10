// Annahme: Du hast eine Liste von Spielern im HTML-Dokument mit der Klasse "ranking-row"
const playersPerPage = 20;
const players = Array.from(document.querySelectorAll('.ranking-row'));
const totalPages = Math.ceil(players.length / playersPerPage);

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * playersPerPage;
  const endIndex = startIndex + playersPerPage;

  players.forEach((player, index) => {
    if (index >= startIndex && index < endIndex) {
      player.style.display = 'flex';
    } else {
      player.style.display = 'none';
    }
  });
}

function createPagination() {
  const paginationContainer = document.querySelector('.pagination');

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.classList.add('page-link');
    pageLink.textContent = i;

    pageLink.addEventListener('click', () => {
      showPage(i);

      const activeLink = document.querySelector('.page-link.active');
      if (activeLink) {
        activeLink.classList.remove('active');
      }
      pageLink.classList.add('active');
    });

    paginationContainer.appendChild(pageLink);
  }

  // Zeige die erste Seite als aktiv an
  const firstPageLink = document.querySelector('.page-link');
  if (firstPageLink) {
    firstPageLink.classList.add('active');
  }
}

// Zeige die erste Seite beim Laden der Seite an
showPage(1);
// Erstelle das Seitensystem
createPagination();
