$(function(){
    let $newItemBtn = $('#showForm');
    let $newItemForm = $('#newItemForm');
    let $textInput = $('input:text');

    $newItemBtn.show();
    $newItemForm.hide();

    $('#showForm').on('click', function(){
        $newItemBtn.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e){
        e.preventDefault();
        let newText = $('input:text').val();
        $('.jQuery li:last').after('<li class="itemNew">'+newText+'</li>');
        $newItemForm.hide();
        $newItemBtn.show();
        $textInput.val('');
    });
});