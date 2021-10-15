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
$("#company-infos").hide();
function style1() {
  $("table").hide(1500);
  $(".form-container").show(1500);
}


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

function showForm() {
  $("table").hide(1000);
  $("#caroussel-container").hide(1000);
  $(".form-container").show(1500);
}

// function to change the img src of the slide show
var imgIds=["#img1","#img2","#img3","#img4"]
function slideShowUpdate(array) {
  for (let i = 0; i < array.length; i++) {
    $(imgIds[i]).attr("src",array[i])  
  }
}

// function to fill the tamplate elements with the input values 
function showTemplate() {
  $(".form-container").hide();
  changeStyle(1)
  $("#cnID-template").text($("#cnID").val())
  $("#desID-template").text($("#descID").val())
  $("#servID-template").text($("#servID").val())
  $("#imgID-template").attr("src",$("#imgID").val())
  slideShowUpdate([$("#car1ID").val(),$("#car2ID").val(),$("#car3ID").val(),$("#car4ID").val()])
  $("#caroussel-container").show(1000);
  $("#company-infos").show(1000);
}

$("#code-container").hide()
// function that generate the template html code
function generateCode() {
  $("#code-container").text($("#company-infos")[0].outerHTML)
  $("#code-container").show(2000)
}



