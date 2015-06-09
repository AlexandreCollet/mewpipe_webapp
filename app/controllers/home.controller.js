angular.module('mewpipe')
       .controller('HomeController', HomeController);

HomeController.$inject = ['$scope','videosService'];

function HomeController($scope,videosService){

	$scope.videos = {
		mostShared : [],
		mostViewed : []
	};

	videosService.findMostShared({},function(videos){
		$scope.videos.mostShared = videos.results;
	});
	videosService.findMostPlayed({},function(videos){
		$scope.videos.mostViewed = videos.results;
	});

}