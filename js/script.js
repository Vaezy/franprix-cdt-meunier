const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

// Fonction pour afficher ou masquer les boutons
function toggleButtons() {
    clearSearch.style.display = searchInput.value ? 'block' : 'none';
}

// Ajouter un événement de saisie à l'input
searchInput.addEventListener('input', toggleButtons);

// Ajouter un événement de clic au bouton de suppression
clearSearch.addEventListener('click', () => {
    searchInput.value = ''; // Efface le contenu de l'input
    toggleButtons(); // Masque le bouton de suppression
});