angular.module('mewpipe')
	   .config(function(toastrConfig,$resourceProvider,$authProvider,$httpProvider,Config){

	   		/**
	   		 * Toastr
	   		 */

	   		angular.extend(toastrConfig, {
	   			positionClass : 'toast-bottom-right',
	   			closeButton   : true,
	   		});

	   		/**
	   		 * Resource Provider
	   		 */

	   		$resourceProvider.defaults.stripTrailingSlashes = false;

	   		/**
	   		 * HTTP Provider
	   		 */
	   		
	   		$httpProvider.interceptors.push('errorsInterceptor');
	   		$httpProvider.interceptors.push('tokenInterceptor');

	   		/**
	   		 * Auth Provider
	   		 */
	   		
	   		$authProvider.loginOnSignup = false;

	   		$authProvider.baseUrl  = Config.server.url + ':' + Config.server.port + '/api';
	   		
			$authProvider.loginUrl     = '/login/';
			$authProvider.signupUrl    = '/user/';
			$authProvider.loginRoute   = '/login';
			$authProvider.signupRoute  = '/register';
			$authProvider.unlinkUrl    = '/logout';
			$authProvider.unlinkMethod = 'post';

	   		$authProvider.facebook({
	   			url      : '/facebook',
		      	clientId : '950692341649325'
		    });

	   });
