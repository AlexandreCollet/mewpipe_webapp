angular.module('mewpipe')
	   .directive('searchForm', searchForm);

searchForm.$inject = ['$location'];

function searchForm($location){

	var directive = {
		templateUrl  : '/app/directives/searchForm.directive.html',
		restrict     : 'E',
		link         : link,
		controller   : "SearchController",
		controllerAs : "ctrl"
	}

	return directive;

	function link(scope, element, attrs){

		scope.ctrl.string = attrs.value || '';

		var form  = element.context.getElementsByClassName('search_form')[0];
		var input = element.context.getElementsByClassName('search_input')[0];

		if("focus" in attrs && attrs.focus !== "false"){ 
			input.focus(); 
		}
		if("fixed" in attrs && attrs.fixed !== "false"){ 
			form.addClass('fixed'); 
		}

	}

}