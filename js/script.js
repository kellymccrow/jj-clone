const slides = document.getElementsByClassName('carousel-slide');
const dots = document.getElementsByClassName('carousel-btn');

let index = 0;

let interval = setInterval(run, 5000);

function run() {
    index++;
    changeImage()
}

function changeImage() {
    if (index > slides.length - 1) {
        index = 0;
    }

    for (let slide of slides) {
        if (slide.classList.contains('active')) {
            slide.classList.remove('active');
        }
    }

    slides[index].classList.add('active');

    for (let dot of dots) {
        if (dot.classList.contains('active')) {
            dot.classList.remove('active');
        }
    }

    dots[index].classList.add('active');
}

const nav = document.querySelector('.nav-container');

window.onload = function () {
    const landingBtn = document.getElementById('landingBtn');
    landingBtn.style.opacity = 1;
    landingBtn.style.transform = 'translateY(0)';
    nav.style.opacity = 1;
}

window.addEventListener('scroll', () => {
    if (window.scrollY < 5) {
        nav.classList.remove('nav-active')
    } else {
        nav.classList.add('nav-active')
    }
})

nav.addEventListener('mouseover', () => {
    nav.classList.add('nav-active');
})

nav.addEventListener('mouseleave', () => {

    if (window.scrollY < 5) {
        nav.classList.remove('nav-active');
    }
})