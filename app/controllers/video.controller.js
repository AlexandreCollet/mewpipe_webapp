angular.module('mewpipe')
	   .controller('VideoController', VideoController);

VideoController.$inject = ['$routeParams','videosService'];

function VideoController($routeParams, videosService){

	var vm = this;

	var videoId = $routeParams.id;

	vm.video = videosService.findOne({
		id : videoId
	});

}