$(function(){
        $('h1').hide().slideDown();
        let $li = $('.jQuery li');
        $li.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);
    });

$li.on('click', function(){
    $(this).fadeOut(700);
  });
});

