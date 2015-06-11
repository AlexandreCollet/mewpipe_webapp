angular.module('mewpipe')
	   .directive('hamburger', hamburger);

hamburger.$inject = ['$rootScope'];

function hamburger($rootScope){

	/**
	 * VARIABLES
	 */
	
	var template = "<div id='hamburger'><div></div></div>";

	/**
	 * DIRECTIVE
	 */

	var directive = {
		template : template,
		restrict : 'EA'
	}

	return directive;


}