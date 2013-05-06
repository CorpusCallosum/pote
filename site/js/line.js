// JavaScript Document

var arrowsShrunk = false;

//refresh line position to be in the middle and set the arrows to be next to it
  				var windowWidth= $(window).width();
  				var lineXposition=windowWidth/2;	
				/*
$('.arrow-right').css({ left:lineXposition-1});
				$('.arrow-left').css({ left:lineXposition-40});
*/
//refresh the line height to be the size of the document (not just the window)
				var documentHeight= $(document).height();
				$('#line').css({ height:documentHeight+20});
jQuery(function($){
		
  //track dragging of the line
      $('#line').drag(function( ev, dd ){
							   	shrinkArrows();

	  var windowWidth= $(window).width();

      $( this ).css({ left:dd.offsetX });
      var lineXpos = $("#line").offset().left;
      
      	if (lineXpos<10){
      		lineXpos=10;
      		$('#line').css({ left:9});
      	}else if(lineXpos>windowWidth-10){lineXpos=windowWidth-10;
        	$('#line').css({ left:windowWidth-10});
      	}
      
      /* $("#position").html("X: "+lineXpos); */ /* THIS IS THE BAR POSITION */

//reposition the arrows to follow the bar
$('.moveLine').css({ left:lineXpos+10});
//change volumes by the movement of the bar
   leftSound.setVolume(lineXpos/windowWidth);
   rightSound.setVolume(1-(lineXpos/windowWidth)); 

//if it is moving to the left, increase the size of the revealed div
   if(lineXpos<windowWidth/2-10  ){//change the width of rightMoreDiv
   var changeamount=windowWidth/2-lineXpos;
   $('.rightMoreDiv').css({ width:changeamount});
   $('.leftMoreDiv').css({ width:0});
   $('.clearBlack.leftname').fadeOut(500);
   $('.clearBlack.rightname').fadeIn(500);
   }
//else if it is moving to the right, increase the size of the right revealed div   
   else if(lineXpos>windowWidth/2+10){//change the width of leftMoreDiv
   var changeamount=lineXpos-windowWidth/2;
    $('.leftMoreDiv').css({ width:changeamount});
    $('.rightMoreDiv').css({ width:0});
    $('.clearBlack.rightname').fadeOut(500);
    $('.clearBlack.leftname').fadeIn(500);
   }
   }); 
   
   
   
   
   
   

//track the dragging of the arrow circle		
	  $('.moveLine').drag(function( ev, dd ){
	shrinkArrows();
								   
	  var windowWidth= $(window).width();
      $( this ).css({ left:dd.offsetX });
      var lineXpos = $(".moveLine").offset().left;
        if (lineXpos<0){
      		lineXpos=0;
      		$('.moveLine').css({ left:10});
      	}else if(lineXpos>windowWidth-10){lineXpos=windowWidth-10;
        	$('.moveLine').css({ left:windowWidth-10});
      	}
      
      
      //reposition the bar to follow:
	  $('#line').css({ left:lineXpos});		
//change volumes by the movement of the bar
   leftSound.setVolume(lineXpos/windowWidth);
   rightSound.setVolume(1-(lineXpos/windowWidth)); 

//if it is moving to the left, increase the size of the revealed div
   if(lineXpos<windowWidth/2-10){//change the width of rightMoreDiv
   var changeamount=windowWidth/2-lineXpos;
   $('.rightMoreDiv').css({ width:changeamount});
   $('.leftMoreDiv').css({ width:0});
   $('.clearBlack.leftname').fadeOut(500);
   $('.clearBlack.rightname').fadeIn(500);
   }
//else if it is moving to the right, increase the size of the right revealed div   
   else if(lineXpos>windowWidth/2+10){//change the width of leftMoreDiv
   var changeamount=lineXpos-windowWidth/2;
    $('.leftMoreDiv').css({ width:changeamount});
    $('.rightMoreDiv').css({ width:0});
    $('.clearBlack.rightname').fadeOut(500);
    $('.clearBlack.leftname').fadeIn(500);
   }
  
   });    
   
   
   
   
  //if lineXpos >origWidth-10 {then move it a littlet ot the left}
  //else if lineXpos <10 {then move it a little to the right}
   
   
   
   
   
   
   
   
});

var origWidth;
$(document).ready(function() {
    origWidth = $(window).width();  //store the window's width when the document loads
});

$(window).resize(function() {
				/*
var documentHeight= $(document).height();
				$('#line').css({ height:documentHeight+20});
*/
    var curWidth = $(window).width(); //store the window's current width
   // var delta = (curWidth- origWidth);
   // $("#line").offset({left:($("#line").offset().left + delta)});
    $("#line").offset({left:(($("#line").offset().left/origWidth)*curWidth)});

      var lineXpos = $("#line").offset().left;
	  
	  
//reposition the arrows to follow the bar
$('.moveLine').css({ left:lineXpos+10});
$('.moveLine').css({ left:lineXpos+10});
//change volumes by the movement of the bar
  // leftSound.setVolume(lineXpos/windowWidth);
  // rightSound.setVolume(1-(lineXpos/windowWidth)); 

//if it is moving to the left, increase the size of the revealed div
   if(lineXpos<curWidth/2-10){//change the width of rightMoreDiv
   var changeamount=curWidth/2-lineXpos;
   $('.rightMoreDiv').css({ width:changeamount});
   $('.leftMoreDiv').css({ width:0});
   //$('.clearBlack.leftname').fadeOut(500);
   //$('.clearBlack.rightname').fadeIn(500);
   }
//else if it is moving to the right, increase the size of the right revealed div   
   else if(lineXpos>curWidth/2+10){//change the width of leftMoreDiv
   var changeamount=lineXpos-curWidth/2;
    $('.leftMoreDiv').css({ width:changeamount});
    $('.rightMoreDiv').css({ width:0});
    //$('.clearBlack.rightname').fadeOut(500);
    //$('.clearBlack.leftname').fadeIn(500);
   }

	//$("#line").left = (lineXposition/origWidth)*curWidth;
	
    origWidth = curWidth;
});




//make the arrows appear on mouse move
//$("div").mousemove(function(e){
							  function fadeArrowsIn(){
								  
  $('.moveLine').fadeIn(1000, fadeArrowsOut);
   
							  }
							  
							  function fadeArrowsOut(){
								   $('.moveLine').fadeOut(1000, fadeArrowsIn);
  
							  }
							  
							  fadeArrowsIn();
							  
function shrinkArrows(){
	if(!arrowsShrunk){
	
		$('.circle').animate({
	marginLeft: "-40px",   
    width: "80px",
    borderRadius: "50%"});
		
		//slide arrows
		$('.arrow-right').animate({
	marginLeft: "7px"});
		
		$('.arrow-left').animate({
	marginLeft: "-33px"});
		
		//clear the div
		$(".circle").empty();
		
		arrowsShrunk = true;

	}
		
}

$('.moveLine').mouseup(shrinkArrows);
							  
  // return;
  // });