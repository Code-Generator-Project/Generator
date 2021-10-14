var arrayStyle = [];
function changeStyle(n) {
  $("link").attr("href", arrayStyle(n));
}

$(".form-container").hide();
function style1() {
  $("table").hide(1000);
  $(".form-container").show(1500);
}

var cnID = $("#cnID").val();
var descID = $("#descID").val();
var servID = $("#servID").val();
var imgID = $("#imgID").val();
var car1ID = $("#car1ID").val();
var car2ID = $("#car2ID").val();
var car3ID = $("#car3ID").val();
