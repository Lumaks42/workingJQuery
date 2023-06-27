$(function(){
    let backgroundColor = $('li').css('background-color');
    $('ul.jQuery').append('<span class="colorBefore">Цвет, который был: ' + backgroundColor + '</span>');
    $('li.hot').css({
        'background-color': 'green',
        'border': '1px solid black',
        'color': '#000',
        'font-family': 'serif',
        'padding-left': '+=45'
    });
});