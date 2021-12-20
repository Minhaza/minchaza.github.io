console.log('script.js says "I\'m here"');


// This is menu
function openMenu() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("logo").style.opacity = "0%";


}
function closeMenu() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("logo").style.opacity = "100%";

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
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// var slideIndex2 = 1;

// function plusSlides2(n2) {
//   showSlides2(slideIndex2 += n2);
// }

// function currentSlide2(n2) {
//   showSlides2(slideIndex2 = n2);
// }

// function showSlides2(n2) {
//   var j;
//   var slides2 = document.getElementsByClassName("mySlides2");
//   var dots2 = document.getElementsByClassName("gallery");
//   var captionText = document.getElementById("caption");
//   if (n2 > slides2.length) {slideIndex2 = 1}
//   if (n2 < 1) {slideIndex2 = slides2.length}
//   for (j = 0; j < slides2.length; j++) {
//       slides2[j].style.display = "none";
//   }
//   for (j = 0; j < dots2.length; j++) {
//       dots2[j].className = dots2[j].className.replace(" active", "");
//   }
//   slides2[slideIndex2 - 1].style.display = "block";
//   dots2[slideIndex2 - 1].className += " active";
//   captionText.innerHTML = dots2[slideIndex2 - 1].alt;
// }


// // This is hiding navbar 
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