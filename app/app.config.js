angular.module('mewpipe')
	   .config(function(toastrConfig,$resourceProvider,$authProvider,Config){

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
	   		 * Auth Provider
	   		 */
	   		$authProvider.loginOnSignup = false;
	   		$authProvider.tokenName     = 'key';
	   		
	   		$authProvider.baseUrl  = Config.server.url + ':' + Config.server.port + '/api';
	   		
			$authProvider.loginUrl     = '/login/';
			$authProvider.signupUrl    = '/registration/';
			$authProvider.loginRoute   = '/login';
			$authProvider.signupRoute  = '/register';
			$authProvider.unlinkUrl    = '/logout';
			$authProvider.unlinkMethod = 'post';

	   		$authProvider.facebook({
		      	clientId: '950692341649325'
		    });

	   });
