$(document).ready(function() {
  $('form#fortune-quiz').submit(function(event) {
    event.preventDefault();
    $('#UI').show();

    var zodiacSign;
    var goodLuck;
    var badLuck;
    var zodiacCounter = 0;
    var luckCounter = 0;
    var badLuckCounter = 0;

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
      $('#UI').append(badLuck + '<br>');
      parseInt(badLuckCounter ++);
    });

    var result;
    
    if (zodiacCounter > 1 || zodiacSign === 'unsure') {
      result = $('#mysterious').show();
  } else if(zodiacCounter === 1 && badLuckCounter >=3 && luckCounter < 2) {
    result = $('#unlucky').show();
  } else if (zodiacCounter === 1 && luckCounter >= 3) {
    result = $('#lucky').show();
  } else {
    result = $('#mysterious').show();
  }

  $('#fortune-quiz').hide();
    });
  });