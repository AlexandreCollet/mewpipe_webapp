angular.module('mewpipe')
	   .controller('VideoController', VideoController);

VideoController.$inject = ['$routeParams','$scope','$auth','videosService', 'ngDialog'];

function VideoController($routeParams, $scope, $auth, videosService, ngDialog){

	var videoId = $routeParams.id;

	$scope.video = videosService.findOne({
		id : videoId
	});

	$scope.openShareModal = openShareModal;

	function openShareModal(){
		ngDialog.open({ 
			template   : 'app/views/partials/popup_share.html',
			controller : 'ShareController',
			scope      : $scope
		});
	}

}