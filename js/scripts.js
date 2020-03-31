$(document).ready(function() {
  $('form#fortune-quiz').submit(function(event) {
    event.preventDefault();
    $('#UI').show();

    var zodiacSign;
    var goodLuck;
    var badLuck;
    var zodiacCounter;
    var luckCounter;
    var badLuckCounter;

    $('input:checkbox[name=zodiac]:checked').each(function() {
      zodiacSign = $(this).val();
      $('#UI').append(zodiacSign + '<br>');
      parseInt(zodiacCounter ++);
      console.log(zodiacCounter);
    });
    $('input:checkbox[name=good]:checked').each(function() {
      goodLuck =$(this).val();
      $('#UI').append(goodLuck + '<br>');
      parseInt(luckCounter ++);
    });
    $('input:checkbox[name=bad]:checked').each(function() {
      badLuck=$(this).val();
      $('#UI').append(badLuck + "<br>");
      parseInt(badLuckCounter ++)
    });

    var result;
    
    if (zodiacSign) {
      result = $('#lucky').show();
      $('#fortune-quiz').hide();
    };
  });
});