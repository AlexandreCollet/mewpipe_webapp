angular.module('mewpipe')
	   .config(function(toastrConfig,$resourceProvider,Config){

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

	   });
