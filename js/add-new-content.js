$(function() {
    $('ul.first').before('<span class="notice">Список обновлён!</span>');
    $('li.hot').prepend('<img class="elementImg" src="img/addItem.png"/>');
    let $newListItem = $('<li><em>Куруза</em> без ГМО</li>');
    $('li#four:nth-child(4)').after($newListItem);
});