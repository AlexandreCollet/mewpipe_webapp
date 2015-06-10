angular.module('mewpipe')
       .controller('TagsController', TagsController);

TagsController.$inject = ['$scope', '$routeParams', 'videosService', 'Config'];

function TagsController($scope, $routeParams, videosService, Config){

	var currentPage  = 0;
	var limitResults = Config.requests.defaultLimit;
	var endReached   = false;

	$scope.tagName = $routeParams.string;

	$scope.busy   = false;
	$scope.videos = [];

	$scope.loadMore = loadMore;

	videosService.tag(
		{ limit : limitResults, offset: 0, tag__name: $scope.tagName },
		function(response){
			$scope.videos = response.results;
		}
	);

	function loadMore(){

		if(endReached || $scope.busy) return;

		$scope.busy = true;
		currentPage++;

		videosService.tag(
			{ limit : limitResults, offset: currentPage*limitResults, tag__name: $scope.tagName  },
			function(response){

				if(response.next === null) endReached = true;

				for(var i=0,l=response.results.length;i<l;i++){
					$scope.videos.push(response.results[i]);
				}

				$scope.busy = false;
			}
		);

	}

}