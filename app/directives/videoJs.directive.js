angular.module('mewpipe')
	   .directive('videoJs', videoJs);

videoJs.$inject = ['$rootScope','Config'];

function videoJs($rootScope,Config){

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
			video       : '='
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
					src  : v.file_urls[i].src + ( $rootScope.token ? "&token="+$rootScope.token : "" ),
					type : v.file_urls[i].type 
				});
			}

			player.src(sources);
			player.poster(v.thumbnail_url + ($rootScope.token ? "?token="+$rootScope.token : "" ) );

			var thumbnails = {};
			
			var url = Config.server.url + ':' + Config.server.port + '/api/videos/' + v.uid + "/thumbnail"
			
			if(v.duration <= Config.video.nbThumbnailsMax){
				for(var i=1;i<=v.duration;i++){
					thumbnails[i-1] = {
						src : url + "?t=" + i + ($rootScope.token ? "&token="+$rootScope.token : "" ),
						width: '120px'
					};
				}
			}else{
				thumbnails[0] = {
					src : url + "?t=1" + ($rootScope.token ? "&token="+$rootScope.token : "" ),
				};
				for(var i=1;i<=Config.video.nbThumbnailsMax;i++){
					thumbnails[Math.round(i*(v.duration/Config.video.nbThumbnailsMax))] = {
						src : url + "?t=" + i + ($rootScope.token ? "&token="+$rootScope.token : "" ),
					};
				}
			}

			player.thumbnails(thumbnails);

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