angular.module('mewpipe')
       .controller('ResultsController', ResultsController);

ResultsController.$inject = ['$scope','$routeParams', 'videosService', 'Config'];

function ResultsController($scope, $routeParams, videosService, Config){

	var currentPage  = 0;
	var limitResults = Config.requests.defaultLimit;
	var endReached   = false;

	$scope.searchString = $routeParams.string;
	$scope.busy   = true;
	$scope.videos = [];

	$scope.loadMore = loadMore;

	getRequest($scope.searchString,0,limitResults);

	function loadMore(){

		if(endReached || $scope.busy) return;

		$scope.busy = true;
		currentPage++;

		getRequest($scope.searchString,currentPage*limitResults,limitResults);

	}

	function getRequest(searchString,offset,limit){

		if(searchString){

			videosService.search(
				{ limit : limit, offset: offset, s: searchString },
				function(response){
					$scope.busy   = false;
					for(var i=0,l=response.results.length;i<l;i++){
						$scope.videos.push(response.results[i]);
					}
				},
				function(){ $scope.busy = false; }
			);

		} else {

			videosService.findAll(
				{ limit : limitResults, offset: offset}, 
				function(response){
					$scope.busy   = false;
					for(var i=0,l=response.results.length;i<l;i++){
						$scope.videos.push(response.results[i]);
					}
				},
				function(){ $scope.busy = false; }
			);

		}

	}

}