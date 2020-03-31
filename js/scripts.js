$(document).ready(function() {
  $('form#fortune-quiz').submit(function(event) {
    event.preventDefault();
    $("#zodiac").show();
    $("input:checkbox[name=zodiac]:checked").each(function(){
      var zodiacSign = $(this).val();
      $('#zodiac').append(zodiacSign + '<br>');
    });
    $('#fortune-quiz').hide();
  });
});