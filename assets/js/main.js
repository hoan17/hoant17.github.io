$(function() {

  $('#digital').click(function() {
    console.log("wow");
    $('.dig').toggleClass('active');
    $('#digital').toggleClass('active');
  })

  $('#print').click(function() {
    console.log("yes");
    $('.pri').toggleClass('active');
    $('#print').toggleClass('active');
  })

});
