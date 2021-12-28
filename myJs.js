console.log("I'm working");

// This is menu
function openMenu() {
  document.getElementById("menu").style.width = "25%"; // Lấy id menu
}
function closeMenu() {
  document.getElementById("menu").style.width = "0%";
}

$(function(){
  $(".nav_items a, .logo1, .button") .on('click', function(){
      $("html, body").animate({
          scrollTop: $($.attr(this, 'href')).offset().top
     }, 500); // 500 = 0.5 second
  });
});
// Di chuyển đến sect có tên id

// Back to top
function show(){
  document.getElementById("back_to_top").style.opacity= "100%";
  document.getElementById("back_to_top").style.visibility = "visible";
}
function hide(){
  document.getElementById("back_to_top").style.opacity= "0%";
  document.getElementById("back_to_top").style.visibility = "hidden";
}

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    show();
  } else {
    hide();
  }
});

function scrollToTop(){
  $('html, body').animate({scrollTop:0}, '300');
}

$('.round').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.arrow').toggleClass('bounceAlpha');
});


// This is changing background
var slideIndex = 1;

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