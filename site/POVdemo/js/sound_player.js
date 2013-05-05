// JavaScript Document
//scroll audio controls

//initiate the audio


var soundIndex = 0;
var lastSoundIndex = 0;
var sounds = [["asim","tazim"],["bilal","kashmir"],["sandeep","junaid"]];
var leftSound;  // the soundInstance returned by Sound when we create or play a src
var rightSound;

        var srcLeft, srcRight;            // the audio src we are trying to play
       
        var displayStatus;  // the HTML element we use to display messages to the user

//leftSound = createjs.Sound.play(sounds[soundIndex][0],  createjs.Sound.INTERRUPT_ANY, 0, 0, -1, -1);  // start playing the sound we just loaded, storing the playing instance
  //           rightSound =  createjs.Sound.play(sounds[soundIndex][1],  createjs.Sound.INTERRUPT_ANY, 0, 0, -1, 1);

init(sounds[soundIndex][0],sounds[soundIndex][1]);
/*soundIndex = 1;
init(sounds[soundIndex][0],sounds[soundIndex][1]);
soundIndex = 2;
init(sounds[soundIndex][0],sounds[soundIndex][1]);
*/

 var manifest = [
     {src:"assets/asim.mp3|assetPath/asim.ogg", id:"asim"},
     {src:"assets/tazim.mp3|assetPath/tazim.ogg", id:"tazim"},
     {src:"assets/bilal.mp3|assetPath/bilal.ogg", id:"bilal"},
     {src:"assets/kashmir.mp3|assetPath/kashmir.ogg", id:"kashmir"},
     {src:"assets/sandeep.mp3|assetPath/sandeep.ogg", id:"sandeep"},
     {src:"assets/junaid.mp3|assetPath/junaid.ogg", id:"junaid"},
	 
	 ];
 createjs.Sound.addEventListener("loadComplete", doneLoading); // call doneLoading when each sound loads
 createjs.Sound.registerManifest(manifest);
 
 function doneLoading(){
	 
 }

stopSounds();

window.onscroll = function (oEvent) {
  // called when the window is scrolled.
  st = document.getElementsByTagName("body")[0].scrollTop + $(window).height();
 // alert(st);
 
 if(st <  $("#conflict1").offset().top){
	//don't load any sounds
	//stop sounds
	stopSounds();
	soundIndex = -1;
 }else{
 
 if(st >  $("#conflict1").offset().top){
  	   soundIndex = 0;

 }
  if(st >  $("#conflict2").offset().top){
	 // stopSounds();
	  //init("asim","tazim");
      soundIndex = 1;
  }
  
  if(st >  $("#conflict3").offset().top){
	 // stopSounds();
	  //init("asim","tazim");
      soundIndex = 2;
  }
  
  
  //load sound?
  if(lastSoundIndex != soundIndex){
	stopSounds();
	init(sounds[soundIndex][0],sounds[soundIndex][1]);
  }
  
  
 }
  lastSoundIndex = soundIndex;
}


//************************



        function init(leftName,rightName) {
          
            // Create a single item to load.
            //var assetsPath = "assets/";
            //srcLeft = assetsPath+leftName+".mp3|"+assetsPath+leftName+".ogg";
			
			//RIGHT sound
			 //srcRight = assetsPath+rightName+".mp3|"+assetsPath+rightName+".ogg";
			 
			 leftSound = createjs.Sound.play(leftName);  
             rightSound = createjs.Sound.play(rightName);  

			 
			 
			// leftSound = createjs.Sound.play(srcLeft,  createjs.Sound.INTERRUPT_ANY, 0, 0, -1, -1);  // start playing the sound we just loaded, storing the playing instance
            // rightSound =  createjs.Sound.play(srcRight,  createjs.Sound.INTERRUPT_ANY, 0, 0, -1, 1);


            // NOTE the "|" character is used by Sound to separate source into distinct files, which allows you to provide multiple extensions for wider browser support

            //createjs.Sound.addEventListener("loadComplete", createjs.proxy(playSound,this)); // add an event listener for when load is completed
			
            //createjs.Sound.registerSound(src, "leftSound");  // register sound, which preloads by default
			
			//createjs.Sound.addEventListener("loadComplete", createjs.proxy(playSound,this)); // add an event listener for when load is completed
          //  createjs.Sound.registerSound(srcRight, "rightSound");  // register sound, which preloads by default

           // displayStatus.innerText = "Waiting for load to complete.";  // letting the user know what's happening
        }
        
        
		
		function stopSounds(){
			leftSound.stop();
		    rightSound.stop();

		}


function updateVolume() {
	
	      var lineXpos = $("#line").offset().left;
	 leftSound.setVolume(lineXpos/$(window).width());
   rightSound.setVolume(1-(lineXpos/$(window).width())); 
   

}

     
	     
var refreshId = setInterval(updateVolume, 100);


//this code below just sets the mute function on and off:
$("#volumeControl").click(function() {
if (isMute==false){
 isMute=true; 
 //silence the audio
 createjs.Sound.setVolume(0);
 
}else{isMute=false;
 //turn audio back on:
 createjs.Sound.setVolume(1);

}
});