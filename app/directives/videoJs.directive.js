angular.module('mewpipe')
	   .directive('videoJs', videoJs);

function videoJs(){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var RATIO = 16/9;

	var videoOptions = {
		controls : true,
		preload  : 'auto',
	};

	/**
	 * DIRECTIVE
	 */
	
	var directive = {
		templateUrl : '/app/directives/videoJs.directive.html',
		restrict    : 'EA',
		link        : link,
		scope       : {
			shareAction : '=',
			video       : '=',
			token       : '='
		}
	}

	return directive;

	/**
	 * FUNCTIONS
	 */

	function link(scope, element, attrs){

		var videoContainer = document.getElementById('video_container');
		var videoElement = element.context.getElementsByTagName('video')[0];

		var player = videojs(videoElement, videoOptions);

		//
		scope.video.$promise.then(function(v){

			var sources = [];

			for(var i=0,l=v.file_urls.length;i<l;i++){
				sources.push({
					src  : v.file_urls[i].src + ( scope.token ? "&token="+scope.token : "" ),
					type : v.file_urls[i].type 
				});
			}

			player.src(sources);
			player.poster(v.thumbnail_url + (scope.token ? "?token="+scope.token : "" ) );

			_setVideoSizes(player,videoContainer);

		})

		var shareButton = player.controlBar.addChild('button', {});
		shareButton.addClass("vjs-share"); 
		shareButton.on('click',function(){
			player.pause();
			scope.shareAction();
		});

		_setVideoSizes(player,videoContainer);

		var resizeListener = function(){ _setVideoSizes(player,videoContainer); };

		addResizeListener(videoContainer, resizeListener );

		element.bind("$destroy", function(){
			removeResizeListener(videoContainer, resizeListener ); 
			player.dispose(); 
		});
	}

	function _setVideoSizes(video,container){

		var containerWidth  = container.offsetWidth;
		var percentage      = window.innerWidth < 1200 ? 1 : 0.6;

		var sizes = {
			width  : containerWidth*percentage,
			height : (containerWidth*percentage)/RATIO
		}

		video.width(sizes.width);
		video.height(sizes.height);
	}

}