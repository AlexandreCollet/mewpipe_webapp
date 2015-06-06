angular.module('mewpipe')
	   .directive('activeLink', activeLink);

activeLink.$inject = ['$location'];

function activeLink($location){
	return {
		restrict : 'A',
		link    : function(scope, element, attrs){

			var current  = $location.path(); 
			var href     = element.context.hash.substring(1);
			var isActive = new RegExp('^' + href).test(current);

			isActive ? element.addClass('active') : element.removeClass('active');

		} 
	}
}

