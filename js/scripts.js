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

/* Inicio Para barra de progreso  */
window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}
/* Inicio Para barra de progreso  */


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



/*  Inceput Txtu care se scrie automat singur  */
const text = `Desarrolladora de tareas de gestión contable y administrativas en diversas empresas tras concluir mi Formación Profesional de segundo grado en la rama administrativa y comercial con especialidad en Informática de Empresas.
<br><br>Fui profesora titular del programa de Ingeniería Técnica en Informática de Sistemas de la Escuela Universitaria Politécnica de La Almunia adscrita a la Universidad de Zaragoza, España, involucrada en las áreas de Arquitectura y Tecnología de Computadores así como de Lenguajes y Sistemas Informáticos hasta septiembre de 2012, después de concluir mí. Ingeniería Técnica en Informática de Sistemas. Siendo becada al comienzo de mi segundo curso hasta la finalización de mis estudios.
<br><br>Además de ejercer mis funciones docentes, fui responsable de la gestión de recursos humanos, administración y mantenimiento de los laboratorios y equipos informáticos del centro, desde Septiembre de 1995 hasta Septiembre 2012. Durante todo ese tiempo, participe en la organización de Asambleas, Congresos, cursos y conferencias en mi universidad. Fui miembro del Departamento de I+D de la Escuela Politécnica en donde colabore activamente en las tareas de tutela de proyectos e investigación. Por último, llevé a cabo funciones de tutoría de diversos alumnos del Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Informáticas, durante la realización de sus prácticas, con una duración de 380 horas.
<br><br>Desde el año 2012, en el ejercicio libre de mi profesión, lleve a cabo labores de tutoría y/o docencia de alumnos en diferentes ámbitos de la formación reglada y no reglada tutorando durante el desarrollo de sus estudios, alumnos del Ciclo Medio de Sistemas Microinformático y Redes y alumnos de diversos certificados de Profesionalidad del SEPE y del SOC en modalidad online y presencial en diferentes provincias españolas, así como de alumnos del Master de Educación y TIC de la UOC durante tres cursos consecutivos por lo que conozco bien el modelo y sistema educativo de la UOC.
<br><br>Soy doctora en Educación y TIC (eLearning) por la Universitat Oberta de Catalunya, licenciada en Ingeniería Técnica en Informática de Sistemas por la Escuela Universitaria Politécnica de La Almunia y dos másteres, uno en Educación y TIC (e-learning) y otro en Aplicaciones Multimedia, por la Universitat Oberta de Catalunya, España.
<br><br>Actualmente, soy profesora del Master Universitario en Formación del Profesorado especialidad de Tecnología e Informática y Directora de los Trabajos Fin de Master, Directora de los Trabajos Fin de Master del Master Universitario en Necesidades Educativas Especiales y Atención Temprana y profesora del Máster en Investigación en Educación en la asignatura de Métodos mixtos de investigación en educación (VIU- Universidad internacional de Valencia).
<br><br>Además, de miembro del IN3- Grupo SmartLearn (UOC) como investigadora. Mis intereses de investigación son: Inteligencia Emocional, Learning Analytics, E-learning, Sistemas Colaborativos, Afectivos y Adaptativos, Análisis de la Interacción, CSCL, CSCW, Gestión del Conocimiento.`;
const typewriter = document.getElementById('typewriter');
let index = 0;
//console.log(typewriter);

var currentURL = window.location.href;

if (currentURL.includes("index.html")) {
  location.reload();
// Estás en la página index.html
setTimeout(
function type() {
  if (index < text.length) {
    typewriter.innerHTML = text.slice(0, index);
    index++;
    setTimeout(type, 30);
    } else {
      typewriter.innerHTML = text.slice(0, index);
    }
}, 8000);
}
/*  FIN Txtu care se scrie automat singur  */

if(document.getElementById("rides") != null){
const rides = document.getElementById("rides").innerHTML=`<h4 style="text-align: center;"><em class="TiposRedesSociales">Redes sociales:</em></h4>
            <div id="RedesSocialesFooter">
                <div id="RedesSocialesFacebook"><a><i class="bi bi-facebook"></i></a></div>
                <div id="RedesSocialesTwitter"><a><i class="bi bi-twitter"></i></a></div>
                <div id="RedesSocialesYoutube"><a><i class="bi bi-youtube"></i></a></div>
                <div id="RedesSocialesInstagram"><a><i class="bi bi-instagram"></i></a></div>
                <div id="RedesSocialesLinkedin"><a><i class="bi bi-linkedin"></i></a></div>
                <div id="RedesSocialesGithub"><a><i class="bi bi-github"></i></a></div>
                <div id="RedesSocialesWhatsapp"><a href="https://wa.me/0034646930223?text=Hola%20Marta." target="_blank"><i class="bi bi-whatsapp"></i></a></div>
            </div>`;
}


if(document.getElementById("tablaMovil") != null){
const tablaMovil = document.getElementById("tablaMovil").innerHTML=`<table class="table table-sm">
    <caption>Conocimiento de idiomas:</caption>
      <thead><tr><th scope="col">Idioma</th><th scope="col">Nivel</th></tr></thead>
      <tbody>
        <tr><th scope="row">Español</th><td>C2</td></tr>
        <tr><th scope="row">Ingles</th><td>B2</td></tr>
        <tr><th scope="row">Catalán</th><td>B2</td></tr>
        <tr><th scope="row">Francés</th><td>A2</td></tr>
        <tr><th scope="row">Griego</th><td>A1</td></tr> 
      </tbody> 
    </table>`;
}


if(document.getElementById("ensenoTablaPequna") != null){
document.getElementById("ensenoTablaPequna").innerHTML +=`<table class="table table-sm">
        <caption>Puestos desempeñados en la enseñanza reglada universitaria:</caption>
      <thead>
        <tr>
            <th>Categoría</th>
            <th>Centro, Tiempo, Fecha</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Profesor Ayudante de Ingeniería Técnica en Informática de Sistemas</th>
          <td>Centro: EUPLA. Tiempo Completo. Activando desde Octubre 1997 hasta Agosto 2000.</td>
        </tr>

        <tr>
          <th scope="row">Profesora Agregada de Ingeniería Técnica en Informática de Sistemas</th>
          <td>Centro: EUPLA. Tiempo Completo. Activando desde Septiembre 2000 hasta Agosto 2007.</td>
        </tr>

        <tr>
          <th scope="row">Profesora Titular de Ingeniería Técnica en Informática de Sistemas</th>
          <td>Centro: EUPLA. Tiempo Completo. Activando desde Septiembre 2007 hasta Septiembre 2012.</td>
        </tr>

        <tr>
          <th scope="row">Vocal del Tribunal Informático de Ingeniería Técnica en Informática de Sistemas</th>
          <td>Centro: EUPLA. Tiempo Completo. Activando desde Octubre 1997 hasta Septiembre 2004.</td>
        </tr>

        <tr>
          <th scope="row">Presidenta del Tribunal de Ingeniería Técnica en Informática de Sistemas</th>
          <td>Centro: EUPLA. Tiempo Completo. Activando desde Octubre 2004 hasta Septiembre 2012.</td>
        </tr>

        <tr>
          <th scope="row">Dirección de proyectos fin de carrera pertenecientes a la Ingeniería Técnica en Informática de Sistemas</th>
          <td>Centro: EUPLA. Tiempo Completo. Activando desde Octubre 1997 hasta Septiembre 2012.</td>
        </tr>

        <tr>
          <th scope="row">Profesor Colaborador Docente de los Trabajos Fin de Master del Master de Educación y TIC (elearning)</th>
          <td>Centro: UOC. Tiempo Parcial. Activando desde Febrero 2017 hasta Junio 2020.</td>
        </tr>

        <tr>
          <th scope="row">Profesora Asociada del Grado de Ingeniería Informática</th>
          <td>Centro: Escuela Universitaria Politécnica de Teruel. Tiempo Parcial. Activando desde 18/09/2019 hasta 12/11/2019.</td>
        </tr>

        <tr>
          <th scope="row">Directora de los Trabajos Fin de Master del Master de Inteligencia Artificial</th>
          <td>Centro: UNIR. Tiempo Parcial. Activando desde Febrero 2022 hasta Septiembre 2023</td>
        </tr>

        <tr>
          <th scope="row">Profesora del Master Universitario en Investigación Educativa</th>
          <td>Centro: VIU. Tiempo Parcial. Activando desde Octubre 2023 hasta la Actualidad.</td>
        </tr>

        <tr>
          <th scope="row">Profesora del Master Universitario en Investigación Educativa</th>
          <td>Centro: VIU. Tiempo Parcial. Activando desde Octubre 2023 hasta la Actualidad.</td>
        </tr>

        <tr>
          <th scope="row">Profesora del Master Universitario en Formación del Profesorado especialidad de Tecnología e Informática</th>
          <td>Centro: VIU. Tiempo Parcial. Activando desde Octubre 2023 hasta la Actualidad.</td>
        </tr>

        <tr>
          <th scope="row">Directora de los Trabajos Fin de Master del Master Universitario en Formación del Profesorado especialidad de Tecnología e Informática</th>
          <td>Centro: VIU. Tiempo Parcial. Activando desde Enero 2023 hasta la Actualidad.</td>
        </tr>

        <tr>
          <th scope="row">Directora de los Trabajos Fin de Master del Master Universitario en Necesidades Educativas Especiales y Atención Temprana</th>
          <td>Centro: VIU. Tiempo Parcial. Activando desde Enero 2023 hasta la Actualidad.</td>
        </tr>

        <tr>
          <th scope="row">Dirección TFM Máster Profesorado en Educación Secundaria</th>
          <td>Centro: UDIMA. Tiempo Parcial. Activando desde Octubre 2023 hasta la Actualidad.</td>
        </tr>
        
      </tbody> 
    </table>`;
}
