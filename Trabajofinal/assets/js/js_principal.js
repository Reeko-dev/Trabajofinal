let slideIndex = 0;
showSlides();

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}


 let currentIndex = 1;
showSlides(currentIndex);

function currentSlide(n) {
    slideIndex = n - 1; 
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

function actualizarContador() {

    let visitas = localStorage.getItem('contadorVisitas');

    if (visitas === null) {
        visitas = 0;
    } else {
        visitas = parseInt(visitas);
    }

    visitas++;

    localStorage.setItem('contadorVisitas', visitas);

    document.getElementById('contador').innerText = `Número de visitas: ${visitas}`;
}

actualizarContador();
showSlides();

function changeSlide(n) {
    slideIndex = (slideIndex + n) % document.getElementsByClassName("carousel-item").length;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

function actualizarContador() {
    let visitas = localStorage.getItem('contadorVisitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('contadorVisitas', visitas);
    document.getElementById('contador').innerText = `Número de visitas: ${visitas}`;
}

actualizarContador();
