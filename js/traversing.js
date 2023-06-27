$(function() {
    var $h2 = $('.show');
    $('.jQuery').hide();
    $h2.append('<a>показать</a>');
  
    $h2.on('click', function() {
      $h2.next('.jQuery')
        .fadeIn(500)
        .children('.hot')
        .addClass('complate');
      $h2.find('a').fadeOut();
    });
  
});