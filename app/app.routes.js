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

		.when('/login', {
			templateUrl  : '/app/views/login.html',
			controller   : 'LoginController'
		})

		.when('/register', {
			templateUrl  : '/app/views/register.html',
			controller   : 'RegisterController'
		})

		.when('/upload', {
			templateUrl  : '/app/views/upload.html',
			controller   : 'UploadController'
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

		.when('/my_videos', {
			templateUrl  : '/app/views/my_videos.html',
			controller   : 'MyVideosController'
		})

		.otherwise({ redirectTo : '/' });
}