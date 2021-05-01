
/////       RTT FUNCTION        /////

/// WEST RTT GRAPH FUNCTIONS ///
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

/// EAST RTT GRAPH FUNCTIONS ///
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




/////       Upload/Download FUNCTION        /////

/// WEST GRAPH FUNCTIONS ///
function westUpDownTenPercentFunc() {
    $('#10WUDgraph').show(1100, "linear");
    $('#20WUDgraph').hide(700, "linear");
    $('#50WUDgraph').hide(700, "linear");
    $('.col h4').text(' Top 10% West Upload/Download Data ');
    $('.col h6').text('In a time of crisis, ask yourself, what will Napoleon do? He would probably dip his croissant in coffee and invade Russia. Not very relevant here because he was never trapped in an underground basement filled with blood thirsty aliens! Thats right ladies and gentlemen, you are screwed');
}

function westUpDownTwentyPercentFunc() {
    $('#10WUDgraph').hide(700, "linear");
    $('#20WUDgraph').show(1100, "linear");
    $('#50WUDgraph').hide(700, "linear");
    $('.col h4').text(' Top 20% West Upload/Download Data ');
    $('.col h6').text('It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.');
}

function westUpDownFiftyPercentFunc() {
    $('#10WUDgraph').hide(700, "linear");
    $('#20WUDgraph').hide(700, "linear");
    $('#50WUDgraph').show(1100, "linear");
    $('.col h4').text(' Top 50% West Upload/Download Data ');
    $('.col h6').text('This is a work in progress.');
}

/// EAST RTT GRAPH FUNCTIONS ///
function eastUpDownTenPercentFunc() {
    $('#10EUDgraph').show(1100, "linear");
    $('#20EUDgraph').hide(700, "linear");
    $('#50EUDgraph').hide(700, "linear");
    $('.col h4').text(' Top 10% East Upload/Download Data ');
    $('.col h6').text('In a time of crisis, ask yourself, what will Napoleon do? He would probably dip his croissant in coffee and invade Russia. Not very relevant here because he was never trapped in an underground basement filled with blood thirsty aliens! Thats right ladies and gentlemen, you are screwed');
}

function eastUpDownTwentyPercentFunc() {
    $('#10EUDgraph').hide(700, "linear");
    $('#20EUDgraph').show(1100, "linear");
    $('#50EUDgraph').hide(700, "linear");
    $('.col h4').text(' Top 20% East Upload/Download Data ');
    $('.col h6').text('It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.');
}

function eastUpDownFiftyPercentFunc() {
    $('#10EUDgraph').hide(700, "linear");
    $('#20EUDgraph').hide(700, "linear");
    $('#50EUDgraph').show(1100, "linear");
    $('.col h4').text(' Top 50% East Upload/Download Data ');
    $('.col h6').text('This is a work in progress.');
}





/////       RTT FUNCTION        /////

// West RTT Click Function
$("#buttonWTen").click(function () {
    setTimeout(westRttTcpTenPercentFunc);
});
$("#buttonWTwenty").click(function () {
    setTimeout(westRttTcpTwentyPercentFunc);
});
$("#buttonWFifty").click(function () {
    setTimeout(westRttTcpFiftyPercentFunc);
});

// East RTT Click Function
$("#buttonETen").click(function () {
    setTimeout(eastRttTcpTenPercentFunc);
});
$("#buttonETwenty").click(function () {
    setTimeout(eastRttTcpTwentyPercentFunc);
});
$("#buttonEFifty").click(function () {
    setTimeout(eastRttTcpFiftyPercentFunc);
});

/////       Upload/Download FUNCTION        /////

// West Upload/Download Function
$("#buttonWUDTen").click(function () {
    setTimeout(westUpDownTenPercentFunc);
});
$("#buttonWUDTwenty").click(function () {
    setTimeout(westUpDownTwentyPercentFunc);
});
$("#buttonWUDFifty").click(function () {
    setTimeout(westUpDownFiftyPercentFunc);
});

// East Upload/Download Function
$("#buttonEUDTen").click(function () {
    setTimeout(eastUpDownTenPercentFunc);
});
$("#buttonEUDTwenty").click(function () {
    setTimeout(eastUpDownTwentyPercentFunc);
});
$("#buttonEUDFifty").click(function () {
    setTimeout(eastUpDownFiftyPercentFunc);
});

/// LOADING GRAPHS ///
function loadWestGraphFunction() {
    $('#20Wgraph').hide();
    $('#50Wgraph').hide();
}
function loadEastGraphFunction() {
    $('#20Egraph').hide();
    $('#50Egraph').hide();
}
function loadWestUDGraphFunction() {
    $('#20WUDgraph').hide();
    $('#50WUDgraph').hide();
}
function loadEastUDGraphFunction() {
    $('#20EUDgraph').hide();
    $('#50EUDgraph').hide();
}

// A $( document ).ready() block.
$(document).ready(function () {
    setTimeout(loadWestGraphFunction, 2500);
    setTimeout(loadEastGraphFunction, 2500);
    setTimeout(loadWestUDGraphFunction, 2500);
    setTimeout(loadEastUDGraphFunction, 2500);
});






