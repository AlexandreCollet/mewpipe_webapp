angular.module('mewpipe')
	   .config(function(toastrConfig,$resourceProvider){

	   		angular.extend(toastrConfig, {
	   			positionClass : 'toast-bottom-right',
	   			closeButton   : true,
	   		});

	   		$resourceProvider.defaults.stripTrailingSlashes = false;

	   });
