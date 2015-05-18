angular.module('mewpipe')
	   .directive('searchForm', searchForm);

function searchForm(){

	var directive = {
		templateUrl : '/app/directives/searchForm.directive.html',
		restrict    : 'E',
		link        : link
	}

	return directive;

	function link(scope, element, attrs){

		var form  = element.context.getElementsByClassName('search_form')[0];
		var input = element.context.getElementsByClassName('search_input')[0];

		input.value = attrs.value ? attrs.value : "";
		
		if("focus" in attrs && attrs.focus !== "false"){ 
			input.focus(); 
		}
		if("fixed" in attrs && attrs.fixed !== "false"){ 
			form.addClass('fixed'); 
		}
	
	}

}