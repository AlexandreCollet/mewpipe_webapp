angular.module('mewpipe')
	   .config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl  : '/app/views/home.html',
			controller   : 'HomeController',
			controllerAs : 'home'
		});
}