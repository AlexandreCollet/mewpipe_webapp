angular.module('mewpipe')
	   .directive('videoBackground', videoBackground);

function videoBackground(){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var RATIO = 16/9;

	var videoBackgroundOptions = {
		controls : false,
		autoplay : true,
		loop     : true,
		muted    : true,
	};

	/**
	 * DIRECTIVE
	 */
	
	var directive = {
		templateUrl : '/app/directives/videoBackground.directive.html',
		restrict    : 'EA',
		link        : link
	}

	return directive;

	/**
	 * FUNCTIONS
	 */

	function link(scope, element, attrs){

		var videoElement = element.context.getElementsByTagName('video')[0];

		var player = videojs(videoElement, videoBackgroundOptions);
		
		player.muted(true);
		player.src([
			{ type: 'video/mp4', src: '/assets/videos/'+attrs.name+'.mp4' }
		]);

		_setVideoSizes(player);

		var resizeListener = function(){ _setVideoSizes(player); };

		window.addEventListener('resize', resizeListener );

		element.bind("$destroy", function(){ 
			window.removeEventListener('resize', resizeListener );		
			player.dispose(); 
		});
	}

	function _setVideoSizes(video){

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

}