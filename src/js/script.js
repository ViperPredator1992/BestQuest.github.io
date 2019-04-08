$('.burger').click(function () {
    if ($(this).next('.collapse:not(.show)').css('display') == 'none') {
        $(this).next('.collapse:not(.show)').slideDown();
        $('.burger').addClass('burger-open');
    } else {
        $('.burger').removeClass('burger-open');
        $(this).next('.collapse:not(.show)').slideUp();
    }
});