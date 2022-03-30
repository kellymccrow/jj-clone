const filterButton = document.querySelector('.filter-button');
const filterMenu = document.querySelector('.filter-menu-hidden');
const filterClose = document.querySelector('.filter-close');
const sortButton = document.querySelector('.sort-button');
const sortMenu = document.querySelector('.sort-menu-hidden');
const sortClose = document.querySelector('.sort-close');

filterButton.addEventListener('click', function () {
    filterMenu.classList.add('filter-menu-hidden-active');
})

filterClose.addEventListener('click', () => {
    filterMenu.classList.remove('filter-menu-hidden-active');
})

sortButton.addEventListener('click', function () {
    sortMenu.classList.add('sort-menu-hidden-active');
})

sortClose.addEventListener('click', () => {
    sortMenu.classList.remove('sort-menu-hidden-active');
})
