/*
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

/*  Para barra de progreso  */
window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}

/* Header cambio de IMG random 
const images = [

"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/1.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/2.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/3.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/4.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/5.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/6.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/7.jpg",

];

var currentURL = window.location.href;

if (currentURL.includes("index.html")) {
// Estás en la página index.html
const imag = document.getElementById('fotoCarusel');
let currentIndex = 0;

function changeBackground() {
imag.style.backgroundImage = `url('${images[currentIndex]}')`;
currentIndex = (currentIndex + 1) % images.length;
}

// Oculta el carrusel hasta que todas las imágenes se hayan cargado por completo
imag.style.display = 'none';

// Precarga de imágenes
const preloadImages = images.map((imageSrc) => {
const img = new Image();
img.src = imageSrc;
img.onload = () => {
// Muestra el carrusel una vez que todas las imágenes se hayan cargado
imag.style.display = 'block';
};
});

setInterval(changeBackground, 1000);
}
*/