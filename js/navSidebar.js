const menuIcon = document.querySelector('.burger-container');
const navSidebar = document.querySelector('.nav-sidebar-wrapper');
const navClose = document.querySelector('.close-container');

menuIcon.addEventListener('click', function () {
    navSidebar.classList.add('nav-sidebar-active')
})

navClose.addEventListener('click', function () {
    navSidebar.classList.remove('nav-sidebar-active')
})

const searchIcon = document.querySelector('.searchbar-button');
const searchIconLarge = document.querySelector('.searchbar-button-large');
const searchClose = document.querySelector('.searchbar-close');
const searchBar = document.querySelector('.search-bar-container');

searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.classList.add('search-bar-active')
})

searchClose.addEventListener('click', (e) => {
    searchBar.classList.remove('search-bar-active')
})

searchIconLarge.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.classList.add('search-bar-active')
})

const navAcc = document.getElementsByClassName('sidebar-link');

for (let i = 0; i < navAcc.length; i++) {
    navAcc[i].addEventListener('click', function () {
        let dropdown = this.lastElementChild;
        dropdown.classList.toggle('sidebar-dropdown-active')
    })
}

