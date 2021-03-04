const $div = $('<div>', {
    class: 'card'
});
const $input = $('<input>', {
    placeholder: 'Enter items here'
});
const $submit = $('<button>', {
    text: 'Add Item!',
    type: 'submit'
});

$div.append($input).append($submit)
$div.appendTo(document.body)

$submit.on('click', () => {
    let $remove = $('<button>', {
        text: 'Delete',
        class: 'delete-btn'
    }).on('click', () => {
        $remove.parent('li').remove();
    })
    $('<li>', {
        class: 'line-item',
        text: $input.val()
    }).append($remove).appendTo($div);
    $input.val('');
})