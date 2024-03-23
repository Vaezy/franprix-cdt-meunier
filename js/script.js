const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

function toggleButtons() {
    clearSearch.style.display = searchInput.value ? 'block' : 'none';
}

searchInput.addEventListener('input', toggleButtons);

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    toggleButtons();
});