$('.btn1').click(function(){
  $('p').addClass('intro');
});

$('.btn2').click(function(){
    $('p').removeClass('intro');
  });
  
$('.btn3').click(function(){
    $('p').toggleClass('intro');
  });

  $('.btn4').click(function(){
    $('p').slideUp('slow');
  });

  $('.btn5').click(function(){
    $('p').slideDown('slow');
  });

  $('.btn6').click(function(){
    $('p').slideToggle('slow');
  });

  $('.btn7').click(function(){
    $(this).toggleClass('intro');
  }); 

  $('p').click(function(){
    $(this).toggleClass('intro');
  });

  $('.btn8').click(function(){
    $('p').fadeOut('slow');
  }); 

  $('.btn9').click(function(){
    $('p').fadeIn('slow');
  }); 

  
  $('.btn10').click(function(){
    $('p').fadeToggle('slow');
  }); 

  $('.btn11').click(function(){
    $('p').fadeTo(2000,0.5);
    $('p').css('color','red');
  }); 