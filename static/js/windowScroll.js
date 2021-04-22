$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        // NOT Transparent
        $('.navbar').css('background', 'black');
    } else {
        // TRANSPARENT
        $('.navbar').css('background', 'rgba(196, 252, 255, 0)');
    }
});