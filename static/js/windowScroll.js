$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        // NOT Transparent
        $('.navbar').css('background', 'black');
    } else {
        // TRANSPARENT
        $('.navbar').css('background', 'black');
        //rgba(196, 252, 255, 0)
    }
});

var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.navbar').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if (newscroll < mypos && up) {
        $('.navbar').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});