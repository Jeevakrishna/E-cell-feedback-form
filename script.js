var form = document.getE1ementById( 'sheetdb-form' ) ;
form. addEventListener( "submit", e {
  e. preventDefault();
  fetch(form.action, {
   method : "POST",
   body: new FormData(document.getE1ementById("sheetdb-form")),
}).then(
  response response.json()
).then((html) {
// you can put any JS code here
  window. open(' d. html' ,'blank');



var errorNull = true, errorMail = true, errorPass = true;
var checkNull = function(){
  $(this).val($(this).val().trim());
  if ($(this).val() =="") {
    $(this).notify("The field must be filled", "error");
    $(this).addClass("errtextbox");
    errorNull = true;
  } else {
    errorNull = false;
    $(this).removeClass("errtextbox");
  }
};

$("#name").focusout(checkNull);
$("#info").focusout(checkNull);

$("#name").keyup(function(){
  var value = $(this).val();
  if (value.length > 24){ 
    $(this).notify("25 characters maximum", "info");
    $(this).val(value.slice(0,24));
  }
});

$("#mail").focusout(function(){
  var value = $(this).val().trim();
  if (value.search(/^[a-z0-9]{3,}@sastra\.ac.in$/i) != 0) {
    $(this).notify("Email entered incorrectly", "error");
    $(this).addClass("errtextbox");
    errorMail = true;
  } else { 
    $(this).removeClass("errtextbox");
    errorMail = false;
  }
});


$("#send").click(function(){
  if (!(errorNull || errorMail || errorPass)) {
    $("#regForm").submit();
  } else {
    $(this).notify("The form is empty or filled out incorrectly", "error");
  }
});