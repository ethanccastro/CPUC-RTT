
function westRttTcpTenPercentFunc() {
    $('.card .card__face--front').attr('src', '../static/images/timePlotAvgRTT-2012-2020.png');
    $('.card .card__face--back').attr('src', '../static/images/timePlotAvgRTT-2012-2020.png');
    $('.col h4').text(' Time Plot Avg. RTT: 2012 - 2020 ');
    $('.col h6').text('In a time of crisis, ask yourself, what will Napoleon do? He would probably dip his croissant in coffee and invade Russia. Not very relevant here because he was never trapped in an underground basement filled with blood thirsty aliens! Thats right ladies and gentlemen, you are screwed');
}

function westRttTcpTwentyPercentFunc() {
    $('.card .card__face--front').attr('src', '../static/images/linearPlotAvgRTT-2015-2020.png');
    $('.card .card__face--back').attr('src', '../static/images/linearPlotAvgRTT-2015-2020.png');
    $('.col h4').text(' West TCP WIP ');
    $('.col h6').text('It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.');
}

function westRttTcpFiftyPercentFunc() {
    $('.card .card__face--front').attr('src', '../static/images/10%.png');
    $('.card .card__face--back').attr('src', '../static/images/10%.png');
    $('.col h4').text(' Both West RTT and TCP WIP ');
    $('.col h6').text('This is a work in progress.');
}

var card = document.querySelector('.card');

// West RTT, TCP, Both
$("#buttonWTen").click(function () {
    card.classList.toggle('is-flipped')
    setTimeout(westRttTcpTenPercentFunc, 290);
});
$("#buttonWTwenty").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(westRttTcpTwentyPercentFunc, 290);
});
$("#buttonWFifty").click(function () {
    card.classList.toggle('is-flipped');
    setTimeout(westRttTcpFiftyPercentFunc, 290);
});


$(function () {
    $("#stuff").load("../../templates/wRTTAvg_10.html");
});