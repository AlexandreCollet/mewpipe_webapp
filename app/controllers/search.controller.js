angular.module('mewpipe')
       .controller('SearchController', SearchController);

SearchController.$inject = ['$routeParams', 'videosService'];

function SearchController($routeParams, videosService){

	var vm = this;

	vm.string = $routeParams.string;

	vm.videos = videosService.findAll();

}