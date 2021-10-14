// Array of the style links href
var arrayStyle = [
  "style.css",
  "styleTemplate1.css",
  "styleTemplate2.css",
  "styleTemplate3.css",
];
// function that chnage the href of the css link
function changeStyle(n) {
  $("link").attr("href", arrayStyle[n]);
}
// caroussel slide show function
var slideIndex = 0;
showSlides();

$(".form-container").hide();
function style1() {
  $("table").hide(1500);
  $(".form-container").show(1500);
}

var cnID = $("#cnID").val();
var descID = $("#descID").val();
var servID = $("#servID").val();
var imgID = $("#imgID").val();
var car1ID = $("#car1ID").val();
var car2ID = $("#car2ID").val();
var car3ID = $("#car3ID").val();
function showSlides() {
  var i;
  var slides = $(".myslide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}

$(".form-container").hide();
function showForm() {
  $("table").hide(1000);
  $("#caroussel-container").hide(1000);
  $(".form-container").show(1500);
}
