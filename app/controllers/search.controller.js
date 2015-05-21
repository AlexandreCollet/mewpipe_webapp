angular.module('mewpipe')
       .controller('SearchController', SearchController);

SearchController.$inject = ['$location','Config'];

function SearchController($location,Config){

	var vm = this;

	vm.string = "";

	vm.submit = submit;

	function submit(){
		$location.path('/search/' + vm.string);
	};

}	