$(document).ready(function() {
  $('form#fortune-quiz').submit(function(event) {
    event.preventDefault();
    $('#UI').show();
    $('input:checkbox[name=zodiac]:checked').each(function() {
      var zodiacSign = $(this).val();
      $('#UI').append(zodiacSign + '<br>');
    
    var result;

    if (zodiacSign === 'fire') {
      result = $('#lucky').show();
    }
    });
    $('#fortune-quiz').hide();
  });
});