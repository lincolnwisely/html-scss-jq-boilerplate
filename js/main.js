$(document).ready(function() {
  $('.pin').on('click', function() {
    console.log('pin clickes');
    $('.detail-container').addClass('show');
  });

  $('.detail-container button').on('click', function() {
    $('.detail-container').removeClass('show');
  })
})