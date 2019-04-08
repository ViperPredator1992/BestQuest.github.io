$('.burger').click(function () {
    if ($(this).next('.collapse:not(.show)').css('display') == 'none') {
        $(this).next('.collapse:not(.show)').slideDown();
        $('.burger').addClass('burger-open');
        $('.navbar-light .navbar-brand').addClass('opacity');
    } else {
        $('.burger').removeClass('burger-open');
        $(this).next('.collapse:not(.show)').slideUp();
        $('.navbar-light .navbar-brand').removeClass('opacity');
    }
});