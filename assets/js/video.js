(function (){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var RATIO  = 16/9;

	var body      = document.getElementById('body');
	var hamburger = document.getElementById('hamburger');

	var videoContainer = document.getElementById('video_container'); 

	var videoBackgroundOptions = {
		controls : true,
		preload  : 'auto',
		poster   : 'http://cdn.selz.com/plyr/1.0/poster.jpg',
	}

	/**
	 * MAIN
	 */

	videojs.options.flash.swf = "http://mewpipe.front/js/video-js/video-js.swf";

	var video = videojs('video', videoBackgroundOptions, function(){});
	setVideoSizes(video,videoContainer);

	/**
	 * EVENTS
	 */
	
	hamburger.addEventListener('click',function(){
		
		if(body.hasClass('is_open')){
			body.removeClass('is_open');
			hamburger.removeClass('is_active');
		}else{
			body.addClass('is_open');
			hamburger.addClass('is_active');
		}
	
	});

	window.addEventListener('resize',function(event){
		setVideoSizes(video,videoContainer);
	});
	
	/**
	 * FUNCTIONS
	 */

	function setVideoSizes(video,container){

		var containerWidth  = container.offsetWidth;
		var percentage      = window.innerWidth < 1200 ? 1 : 0.6;

		var sizes = {
			width  : containerWidth*percentage,
			height : (containerWidth*percentage)/RATIO
		}

		video.width(sizes.width);
		video.height(sizes.height);
		
	}

})();