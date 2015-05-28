angular.module('mewpipe')
       .controller('ResultsController', ResultsController);

ResultsController.$inject = ['$routeParams', 'videosService', 'Config'];

function ResultsController($routeParams, videosService, Config){

	var vm = this;

	var currentPage  = 0;
	var limitResults = Config.requests.defaultLimit;
	var endReached   = false;

	vm.searchString = $routeParams.string;
	vm.busy   = false;
	vm.videos = [];

	vm.loadMore = loadMore;

	videosService.search(
		{ limit : limitResults, offset: 0, s: vm.searchString },
		function(response){
			vm.videos = response.results;
		}
	);


	function loadMore(){

		if(endReached || vm.busy) return;

		vm.busy = true;
		currentPage++;

		videosService.search(
			{ limit : limitResults, offset: currentPage*limitResults, s: vm.searchString },
			function(response){

				if(response.next === null) endReached = true;

				for(var i=0,l=response.results.length;i<l;i++){
					vm.videos.push(response.results[i]);
				}

				vm.busy = false;
			}
		);

	}

}