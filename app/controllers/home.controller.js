angular.module('mewpipe')
       .controller('HomeController', HomeController);

HomeController.$inject = ['videosService'];

function HomeController(videosService){

	var vm = this;

	vm.videos = {
		mostShared : [],
		mostViewed : []
	};

	videosService.findMostShared({},function(videos){
		vm.videos.mostShared = videos.results;
	});
	videosService.findMostPlayed({},function(videos){
		vm.videos.mostViewed = videos.results;
	});
}