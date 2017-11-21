$(function() {
    $('.js-get-product').click(function() {
        var $item = $(this).closest('.item');

        if (!$item.hasClass('item--disabled')) {
            $item.toggleClass('item--selected');
            $item.removeClass('item--selected-hover');
        }
    });

    $('.products').on('mouseenter', '.item--selected', function() {
        $(this).addClass('item--selected-hover');
    });

    $('.products').on('mouseleave', '.item--selected', function () {
        $(this).removeClass('item--selected-hover');
    });
})