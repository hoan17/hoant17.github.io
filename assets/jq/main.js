$(function() {
  console.log('hey')

  $( ".donuts" ).click(function() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var num1 = getRandomInt(90);
    var num2 = getRandomInt(90);

    $('body').append('<img src="assets/donut.svg" style="position: absolute; top: '+ num1 + 'vh; left: ' + num2 + 'vw; transform: translate(-50%, -50%); max-width: 100px;">');
  });

  $( ".pullout" ).click(function() {
    if ($( ".portfolio" ).hasClass( "out" )) {
      $( ".portfolio" ).animate({
        left: "+=95vw",
      }, 1000, function() {
      });
      $('.tab').text("CLICK HERE FOR MORE");
      $( ".portfolio" ).removeClass("out");
    } else {
      $( ".portfolio" ).animate({
        left: "-=95vw",
      }, 1000, function() {
      });
      $('.tab').text("CLICK HERE TO CLOSE");
      $( ".portfolio" ).addClass("out");
    }
  });

});
