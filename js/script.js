// function to display an icon to empty the search content

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

// button to display burger menu icon

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu button');
    const productContainer = document.querySelector('.product-container');

    burgerMenuBtn.addEventListener('click', function() {
        productContainer.classList.toggle('show');
    });
    
    const burgerIcon = document.getElementById('icon-rotation');
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

// button to display right arrow for responsive

document.addEventListener('DOMContentLoaded', function() {
    const iconRotationButtons = document.querySelectorAll('.right-arrow #icon-rotation');

    iconRotationButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const parentLi = this.closest('.li-product');
            const itemContainer = parentLi.querySelector('.item-container');
            const icon = this.querySelector('iconify-icon');

            if (itemContainer) {
                if (itemContainer.style.opacity === '1') {
                    itemContainer.style.opacity = '0';
                    itemContainer.style.visibility = 'hidden';
                    this.style.transform = 'rotate(0deg)';
                } else {
                    itemContainer.style.opacity = '1';
                    itemContainer.style.visibility = 'visible';
                    this.style.transform = 'rotate(90deg)';
                }
            }
        });
    });
});





