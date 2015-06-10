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

			if(body.hasClass('is_open')){
				body.removeClass('is_open');
				hamburger.removeClass('is_active');
			}else{
				body.addClass('is_open');
				hamburger.addClass('is_active');
			}

		})
	}

}