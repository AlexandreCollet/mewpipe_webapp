angular.module('mewpipe')
	   .controller('RemoveVideoController', RemoveVideoController);

RemoveVideoController.$inject = ['$scope','videosService','ngDialog','toastr','Config'];

function RemoveVideoController($scope,videosService,ngDialog,toastr,Config){

	var videoId    = $scope.ngDialogData.videoId;
	var videoIndex = $scope.ngDialogData.videoIndex;
	
	$scope.confirm = confirm;

	function confirm(){
		videosService.delete({id : videoId})
			.$promise.then(function(){
				$scope.$parent.videos.splice(videoIndex,1);
				$scope.closeThisDialog();
				toastr.success('Video deleted','Success');
			});
	}

}