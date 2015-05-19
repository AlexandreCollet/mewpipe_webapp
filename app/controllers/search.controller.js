angular.module('mewpipe')
       .controller('SearchController', SearchController);

SearchController.$inject = ['$routeParams', 'videosService', 'Config'];

function SearchController($routeParams, videosService, Config){

	var vm = this;

	var currentPage  = 0;
	var limitResults = Config.requests.defaultLimit;
	var endReached   = false;

	vm.string = $routeParams.string;
	vm.busy   = false;
	vm.videos = [];

	vm.loadMore = loadMore;

	videosService.search(
		{ limit : limitResults, offset: 0, s: vm.string },
		function(response){
			vm.videos = response.results;
		}
	);


	function loadMore(){

		if(endReached || vm.busy) return;

		vm.busy = true;
		currentPage++;

		videosService.search(
			{ limit : limitResults, offset: currentPage*limitResults, s: vm.string },
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