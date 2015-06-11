angular.module('mewpipe')
	   .directive('hamburger', hamburger);

hamburger.$inject = [];

function hamburger(){

	/**
	 * VARIABLES
	 */
	
	var template = "<div id='hamburger'><div></div></div>";

	/**
	 * DIRECTIVE
	 */

	var directive = {
		template : template,
		restrict : 'EA',
		link     : link
	}

	return directive;

	/**
	 * FUNCTIONS
	 */
	
	function link(scope, element, attrs){

		var body = document.getElementById('body');
		var hamburger = document.getElementById('hamburger');

		element.on('click', function(){

			if(body.hasClass('sidebar_open')){
				body.removeClass('sidebar_open');
			}else{
				body.addClass('sidebar_open');
			}

		});
	}

}