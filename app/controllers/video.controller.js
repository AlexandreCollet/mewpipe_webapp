angular.module('mewpipe')
	   .controller('VideoController', VideoController);

VideoController.$inject = ['$routeParams','videosService', 'ngDialog'];

function VideoController($routeParams, videosService, ngDialog){

	var vm = this;

	var videoId = $routeParams.id;

	vm.video = videosService.findOne({
		id : videoId
	});

	vm.openShareModal = openShareModal;

	function openShareModal(){
		ngDialog.open({ 
			template   : 'app/views/partials/popup_share.html',
			controller : 'ShareController'
		});
	}

}