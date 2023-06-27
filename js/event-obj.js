$(function(){
    $('.jQuery li').on('click', function(e) {
        $('li span').remove();
        let date = new Date();
        date.setTime(e.timeStamp);
        let clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked +' '+ e.type + '</span>');
    });
});