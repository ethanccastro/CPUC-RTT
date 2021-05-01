
/// WEST GRAPH FUNCTIONS ///
function westRttTcpTenPercentFunc() {
    $('#10Wgraph').show(1100, "linear");
    $('#20Wgraph').hide(700, "linear");
    $('#50Wgraph').hide(700, "linear");
    $('.col h4').text(' Top 10% West RTT/TCP Data ');
    $('.col h6').text('In a time of crisis, ask yourself, what will Napoleon do? He would probably dip his croissant in coffee and invade Russia. Not very relevant here because he was never trapped in an underground basement filled with blood thirsty aliens! Thats right ladies and gentlemen, you are screwed');
}

function westRttTcpTwentyPercentFunc() {
    $('#10Wgraph').hide(700, "linear");
    $('#20Wgraph').show(1100, "linear");
    $('#50Wgraph').hide(700, "linear");
    $('.col h4').text(' Top 20% West RTT/TCP Data ');
    $('.col h6').text('It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.');
}

function westRttTcpFiftyPercentFunc() {
    $('#10Wgraph').hide(700, "linear");
    $('#20Wgraph').hide(700, "linear");
    $('#50Wgraph').show(1100, "linear");
    $('.col h4').text(' Top 50% West RTT/TCP Data ');
    $('.col h6').text('This is a work in progress.');
}

/// EAST GRAPH FUNCTIONS ///
function eastRttTcpTenPercentFunc() {
    $('#10Egraph').show(1100, "linear");
    $('#20Egraph').hide(700, "linear");
    $('#50Egraph').hide(700, "linear");
    $('.col h4').text(' Top 10% East RTT/TCP Data ');
    $('.col h6').text('In a time of crisis, ask yourself, what will Napoleon do? He would probably dip his croissant in coffee and invade Russia. Not very relevant here because he was never trapped in an underground basement filled with blood thirsty aliens! Thats right ladies and gentlemen, you are screwed');
}

function eastRttTcpTwentyPercentFunc() {
    $('#10Egraph').hide(700, "linear");
    $('#20Egraph').show(1100, "linear");
    $('#50Egraph').hide(700, "linear");
    $('.col h4').text(' Top 20% East RTT/TCP Data ');
    $('.col h6').text('It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.');
}

function eastRttTcpFiftyPercentFunc() {
    $('#10Egraph').hide(700, "linear");
    $('#20Egraph').hide(700, "linear");
    $('#50Egraph').show(1100, "linear");
    $('.col h4').text(' Top 50% East RTT/TCP Data ');
    $('.col h6').text('This is a work in progress.');
}

// West RTT, TCP, Both
$("#buttonWTen").click(function () {
    setTimeout(westRttTcpTenPercentFunc);
});
$("#buttonWTwenty").click(function () {
    setTimeout(westRttTcpTwentyPercentFunc);
});
$("#buttonWFifty").click(function () {
    setTimeout(westRttTcpFiftyPercentFunc);
});

// East RTT, TCP, Both
$("#buttonETen").click(function () {
    setTimeout(eastRttTcpTenPercentFunc);
});
$("#buttonETwenty").click(function () {
    setTimeout(eastRttTcpTwentyPercentFunc);
});
$("#buttonEFifty").click(function () {
    setTimeout(eastRttTcpFiftyPercentFunc);
});

// A $( document ).ready() block.
$(document).ready(function () {
    setTimeout(loadWestGraphFunction, 2500);
    setTimeout(loadEastGraphFunction, 2500);
});






