// Array of the style links href
var arrayStyle=["style.css","styleTemplate1.css","styleTemplate2.css","styleTemplate3.css"]
// function that chnage the href of the css link
function changeStyle(n) {
    $("link").attr("href",arrayStyle[n])
}
// caroussel slide show function
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


$(".form-container").hide();
function showForm() {
  $("table").hide(1000);
  $("#caroussel-container").hide(1000)
  $(".form-container").show(1500);
}


