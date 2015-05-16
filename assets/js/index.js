(function (){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var RATIO  = 16/9;

	var searchInput = document.getElementById('search_input');

	var videosMostViewedContainer = document.getElementById('mostViewed');
	var videosMostSharedContainer = document.getElementById('mostShared');

	var videoBackgroundOptions = {
		controls : false,
		autoplay : true,
		loop     : true,
		muted    : true,
	}

	/**
	 * MAIN
	 */
	

	searchFocus();

	var videoBackground = videojs("video_background", videoBackgroundOptions);
	videoBackground.muted(true); //patch muted default options for firefox 
	setVideoSizes(videoBackground);


	/**
	 * EVENTS
	 */
	
	window.addEventListener('resize',function(event){
		setVideoSizes(videoBackground);
	});

	/**
	 * FUNCTIONS
	 */

	function searchFocus(){
		searchInput.focus();
	}

	function setVideoSizes(video){

		var windowWidth  = window.innerWidth;
		var windowHeight = window.innerHeight;

		var sizes = {
			width  : windowWidth,
			height : windowWidth/RATIO
		}

		if(sizes.height < windowHeight){
			sizes = {
				height : windowHeight,
				width  : windowHeight*RATIO
			}
		}

		video.width(sizes.width);
		video.height(sizes.height);
		
		video.el().style.left = -(sizes.width-windowWidth)/2 + "px";
	}


})();