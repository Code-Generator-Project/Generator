// var slideIndex=1

// function plusSlides(n) {
//     showSlides(slideIndex+=n)
// }
// function currentSlide(n) {
//     showSlides(slideIndex=n)
// }

// function showSlides(n) {
//  var slides=$(".myslide")
//  var dots=$(".dot")  
//  if (n>slides.length) {
//     slideIndex=1
//  } 
//  if (n<1) {
//     slideIndex=slides.length 
//  }
//  for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display="none"
//  }
//  for (let i = 0; i < dots.length; i++) {
//     dots[i].className=dots[i].className.replace("active","")
//  }
//  slides[slideIndex-1].style.display="block"
//  dots[slideIndex-1].className+="active"
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides=$(".myslide")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}