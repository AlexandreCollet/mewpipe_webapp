angular.module('mewpipe')
	   .config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl    : '/app/views/home.html',
			controller     : 'HomeController',
			controllerAs   : 'home',
			data : {
				authentication : {
					anonymous : true,
					connected : true
				}
			}
		})

		.when('/login', {
			templateUrl    : '/app/views/login.html',
			controller     : 'LoginController',
			data : {
				authentication : {
					anonymous : true,
					connected : false
				}
			}
		})

		.when('/logout', {
			template       : " ",
			controller     : 'LogoutController',
			data : {
				authentication : {
					anonymous : false,
					connected : true
				}
			}
		})

		.when('/register', {
			templateUrl    : '/app/views/register.html',
			controller     : 'RegisterController',
			data : {
				authentication : {
					anonymous : true,
					connected : false
				}
			}
		})

		.when('/account', {
			templateUrl    : '/app/views/account.html',
			controller     : 'AccountController',
			data : {
				authentication : {
					anonymous : false,
					connected : true
				}
			}
		})

		.when('/upload', {
			templateUrl    : '/app/views/upload.html',
			controller     : 'UploadController',
			data : {
				authentication : {
					anonymous : false,
					connected : true
				}
			}
		})

		.when('/search/:string?', {
			templateUrl    : '/app/views/results.html',
			controller     : 'ResultsController',
			controllerAs   : 'results',
			data : {
				authentication : {
					anonymous : true,
					connected : true
				}
			}
		})

		.when('/tag/:string', {
			templateUrl : '/app/views/tags.html',
			controller  : 'TagsController',
			data : {
				authentication : {
					anonymous : true,
					connected : true
				}
			}
		})

		.when('/videos/:id', {
			templateUrl    : '/app/views/video_view.html',
			controller     : 'VideoController',
			data : {
				authentication : {
					anonymous : true,
					connected : true
				}
			}
		})

		.when('/my_videos', {
			templateUrl    : '/app/views/my_videos.html',
			controller     : 'MyVideosController',
			data : {
				authentication : {
					anonymous : false,
					connected : true
				}
			}
		})

		.when('/error/:code?', {
			templateUrl : '/app/views/error.html',
			controller  : 'ErrorsController',
			data : {
				authentication : {
					anonymous : true,
					connected : true
				}
			} 
		})

		.otherwise({ redirectTo : '/' });
}