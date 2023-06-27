$(function(){
    $('.jQuery li').on('click', function() {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=20'
        }, 500, function(){
            $(this).remove();
        });
    });
});