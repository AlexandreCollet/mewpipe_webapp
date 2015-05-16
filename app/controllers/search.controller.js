angular.module('mewpipe')
       .controller('SearchController', SearchController);

SearchController.$inject = ['$routeParams'];

function SearchController($routeParams){

	var vm = this;

	vm.string = $routeParams.string;

}