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

		element.on('click', function(){

			if(body.hasClass('is_open')){
				body.removeClass('is_open');
				this.removeClass('is_active');
			}else{
				body.addClass('is_open');
				this.addClass('is_active');
			}

		})
	}

}