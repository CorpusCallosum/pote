blinkthearrow();
fadethearrow();
function blinkthearrow(){
$('.ss-links2').animate({opacity:.5},2000).animate({opacity:1},2000).animate({opacity:.5},1000).animate({opacity:1},2000);}
function fadethearrow(){$('.ss-links2').animate({opacity:0},2000);}