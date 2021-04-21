function transitionFunc() {
    var frontThing = document.querySelector('.card__face--front');
    var backThing = document.querySelector('.card__face--back');
}

function westRTTFunc() {
    $('.card .card__face--front').attr('src', '../static/images/timePlotAvgRTT-2012-2020.png');
    $('.card .card__face--back').attr('src', '../static/images/timePlotAvgRTT-2012-2020.png');
    $('.col h4').text(' Time Plot Avg. RTT: 2012 - 2020 ');
    $('.col h6').text('In a time of crisis, ask yourself, what will Napoleon do? He would probably dip his croissant in coffee and invade Russia. Not very relevant here because he was never trapped in an underground basement filled with blood thirsty aliens! Thats right ladies and gentlemen, you are screwed');
}

function westTCPFunc() {
    $('.card .card__face--front').attr('src', '../static/images/linearPlotAvgRTT-2015-2020.png');
    $('.card .card__face--back').attr('src', '../static/images/linearPlotAvgRTT-2015-2020.png');
    $('.col h4').text(' West TCP WIP ');
    $('.col h6').text('It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.');
}

function westBothFunc() {
    $('.card .card__face--front').attr('src', '../static/images/10%.png');
    $('.card .card__face--back').attr('src', '../static/images/10%.png');
    $('.col h4').text(' Both West RTT and TCP WIP ');
    $('.col h6').text('This is a work in progress.');
}

function eastRTTFunc() {
    $('.card .card__face--front').attr('src', '../static/images/stock.jpg');
    $('.card .card__face--back').attr('src', '../static/images/stock.jpg');
    $('.col h4').text(' East Avg RTT ');
    $('.col h6').text('Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control panel and knew there was nothing that would ever get it back into working order. She was the first and it was not clear this would also be her last.');
}

function eastTCPFunc() {
    $('.card .card__face--front').attr('src', '../static/images/scatterPlotAvgRTT.png');
    $('.card .card__face--back').attr('src', '../static/images/scatterPlotAvgRTT.png');
    $('.col h4').text(' East TCP WIP ');
    $('.col h6').text('Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.');
}

function eastBothFunc() {
    $('.card .card__face--front').attr('src', '../static/images/20%.png');
    $('.card .card__face--back').attr('src', '../static/images/20%.png');
    $('.col h4').text(' Both East RTT and TCP WIP ');
    $('.col h6').text('He picked up the burnt end of the branch and made a mark on the stone. Day 52 if the marks on the stone were accurate. He couldnt be sure.Day and nights had begun to blend together creating confusion, but he knew it was a long time. Much too long.');
}

var card = document.querySelector('.card');

// West RTT, TCP, Both
$("#buttonWRTT").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(westRTTFunc, 290);
});
$("#buttonWTCP").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(westTCPFunc, 290);
});
$("#buttonWBoth").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(westBothFunc, 290);
});

// East RTT, TCP, Both
$("#buttonERTT").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(eastRTTFunc, 290);
});
$("#buttonETCP").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(eastTCPFunc, 290);
});
$("#buttonEBoth").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(eastBothFunc, 290);
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        // NOT Transparent
        $('.navbar').css('background', 'black');
    } else {
        // TRANSPARENT
        $('.navbar').css('background', 'rgba(196, 252, 255, 0)');
    }
});