angular.module('mewpipe')
	   .config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl  : '/app/views/home.html',
			controller   : 'HomeController',
			controllerAs : 'home'
		})

		.when('/search/:string', {
			templateUrl  : '/app/views/results.html',
			controller   : 'ResultsController',
			controllerAs : 'results'
		})

		.when('/videos/:id', {
			templateUrl  : '/app/views/video_view.html',
			controller   : 'VideoController'
		})

		.otherwise({ redirectTo : '/' });
}