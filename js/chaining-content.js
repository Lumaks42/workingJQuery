$(function() {
    $('li:contains("Сочные груши")').text('Кедровые орехи');
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});