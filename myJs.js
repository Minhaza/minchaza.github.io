console.log('script.js says "I\'m here"');


// This is menu
function openMenu() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("logo").style.opacity = "0%";
    document.getElementById("arrowLeft").style.opacity = "0%";
    document.getElementById("arrowRight").style.opacity = "0%";

}
function closeMenu() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("logo").style.opacity = "100%";
    document.getElementById("arrowLeft").style.opacity = "100%";
    document.getElementById("arrowRight").style.opacity = "100%";
}


var slideIndex = 1;




// This is changing background

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// This is hiding navbar 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}