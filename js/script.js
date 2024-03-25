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

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu button');
    const productContainer = document.querySelector('.product-container');

    burgerMenuBtn.addEventListener('click', function() {
        productContainer.classList.toggle('show');
    });
    
    const burgerIcon = document.getElementById('burger-icon');
    let isOpen = false;

    burgerIcon.addEventListener('click', function(){
        isOpen = !isOpen;
        if (isOpen) {
            burgerIcon.style.transform = 'rotate(360deg)';
            burgerIcon.innerHTML = '<iconify-icon icon="solar:list-cross-bold" width="25px" height="25px" style="color: rgb(88, 87, 87)"></iconify-icon>';
        } else {
            burgerIcon.style.transform = 'rotate(0deg)';
            burgerIcon.innerHTML = '<iconify-icon icon="iconamoon:menu-burger-horizontal-fill" width="25px" height="25px" style="color: rgb(88, 87, 87)"></iconify-icon>';
        }
    })
});