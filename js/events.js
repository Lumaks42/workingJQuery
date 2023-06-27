$(function() {
    let ids='';
    let $listItem = $('.jQuery li');

    $listItem.on('mouseover click', function() {
        ids = this.id;
        $listItem.children('span').remove();
        $(this).append('<span class="order">'+ids+'</span>');
    });
    $listItem.on('mouseout', function() {
        $(this).children('span').remove();
    });
});