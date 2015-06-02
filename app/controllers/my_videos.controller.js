angular.module('mewpipe')
	   .controller('MyVideosController', MyVideosController);

MyVideosController.$inject = ['$scope','videosService', 'ngDialog'];

function MyVideosController($scope, videosService, ngDialog){

	var endReached   = false;
	var limitResults = 25;
	var currentPage  = 0;

	$scope.videos = [];
	$scope.busy   = false;

	$scope.loadMore        = loadMore;
	$scope.openEditModal   = openEditModal;
	$scope.openRemoveModal = openRemoveModal;

	videosService.findByUser(
		{ limit : limitResults, offset: 0 },
		function(response){

			if(response.next === null) endReached = true;

			for(var i=0,l=response.results.length;i<l;i++){
				$scope.videos.push(response.results[i]);
			}

			$scope.busy = false;
		}
	);

	function openEditModal(videoId,key){
		ngDialog.open({ 
			template   : 'app/views/partials/popup_edit_video.html',
			controller : 'EditVideoController',
			scope      : $scope,
			data       : {
				videoId    : videoId,
				videoIndex : key,
			}
		});
	}

	function openRemoveModal(videoId,key){
		ngDialog.open({ 
			template   : 'app/views/partials/popup_remove_video.html',
			controller : 'RemoveVideoController',
			scope      : $scope,
			data       : {
				videoId    : videoId,
				videoIndex : key,
			}
		});
	}

	function loadMore(){

		if(endReached || $scope.busy) return;

		$scope.busy = true;
		currentPage++;

		videosService.findByUser(
			{ limit : limitResults, offset: currentPage*limitResults },
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