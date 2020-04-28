var slideIndex = 1;
showSlides(slideIndex);
    
function plusSlides(n, type, dot) {
    showSlides(slideIndex += n, type, dot);
}
    
function currentSlide(n, type, dot) {
    showSlides(slideIndex = n, type, dot);
}
    
function showSlides(n, type, dot) {
    var i;
    var slides = document.getElementsByClassName(type);
    var dots = document.getElementsByClassName(dot);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex-1] != null) {
        slides[slideIndex-1].style.display = "block";  
    }

    if (dots[slideIndex-1] != null) {
        dots[slideIndex-1].className += " active";
    }
}