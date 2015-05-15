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
	
	var videosMostViewedOptions = [
		{
			title : "Trois petits pingouins sur la banquise", 
			src : [
				{ type:"video/mp4" , src:"http://easyhtml5video.com/assets/video/new/index_fr/Penguins_of_Madagascar.m4v"  },
				{ type:"video/webm", src:"http://easyhtml5video.com/assets/video/new/index_fr/Penguins_of_Madagascar.webm" }
			],
			poster : "http://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg"
		},
		{
			title : "Played #2",
			src : [
				{ type:"video/mp4" , src:"http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"  },
				{ type:"video/webm", src:"http://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" }
			],
			poster : "http://www.html5rocks.com/en/tutorials/video/basics/poster.png"
		},
		{
			title : "cities", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/cities.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
		{
			title : "river", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/river.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
		{
			title : "newyears", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/newyears.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
		{
			title : "volcan", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/volcan.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
	];
	var videosMostSharedOptions = [
		{
			title : "Shared #1", 
			src : [
				{ type:"video/webm", src:"http://cdn.selz.com/plyr/1.0/movie.webm" },
				{ type:"video/mp4" , src:"http://cdn.selz.com/plyr/1.0/movie.mp4"  },
			],
			poster : "http://cdn.selz.com/plyr/1.0/poster.jpg"
		},
		{
			title : "Shared #2", 
			src : [
				{ type:"video/webm", src:"http://cdn.selz.com/plyr/1.0/movie.webm" },
				{ type:"video/mp4" , src:"http://cdn.selz.com/plyr/1.0/movie.mp4"  },
			],
			poster : "http://cdn.selz.com/plyr/1.0/poster.jpg"
		},
		{
			title : "Flag", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/flag.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
		{
			title : "jump", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/jump.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
		{
			title : "cities", 
			src : [
				{ type:"video/mp4", src:"http://mewpipe.front/videos/uploaded/cities.mp4" },
			],
			poster : "http://mewpipe.front/videos/rain.png"
		},
	];

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