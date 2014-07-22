// this is the code that actually starts the JavaScript application!!
// when the document has been fully loaded, all the roseApp.start() method
$(document).ready(roseApp.start());
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			document.addEventListener("pause", onPause, false);
			document.addEventListener("resume", onResume, false);
			alert("Device is Ready");
		}

		//What to do when paused
		function onPause(){	
			alert("paused!");
		}
		
		//What to do when resumed
		function onResume()
		{		
			alert("resume");
		}

$(function(){
    var menuStatus;
    
    $("a.showMenu").click(function(){
        if(menuStatus != true){                
        $(".ui-page-active").animate({
            marginLeft: "165px",
          }, 300, function(){menuStatus = true});
          return false;
          } else {
            $(".ui-page-active").animate({
            marginLeft: "0px",
          }, 300, function(){menuStatus = false});
            return false;
          }
    });
 
    $('.pages').live("swipeleft", function(){
        if (menuStatus){    
        $(".ui-page-active").animate({
            marginLeft: "0px",
          }, 300, function(){menuStatus = false});
          }
    });
    
    $('.pages').live("swiperight", function(){
        if (!menuStatus){    
        $(".ui-page-active").animate({
            marginLeft: "165px",
          }, 300, function(){menuStatus = true});
          }
    });
    
    $("#menu li a").click(function(){
        var p = $(this).parent();
        if($(p).hasClass('active')){
            $("#menu li").removeClass('active');
        } else {
            $("#menu li").removeClass('active');
            $(p).addClass('active');
        }
    });
        
});
