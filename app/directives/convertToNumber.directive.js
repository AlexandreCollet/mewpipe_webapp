angular.module('mewpipe')
	   .directive('convertToNumber', convertToNumber);

function convertToNumber(){
	return {
		restrict : 'A',
		require  : 'ngModel',
		link     : function(scope, element, attrs, ngModel){

			ngModel.$parsers.push(function(val){
				return parseInt(val,10);
			});

			ngModel.$formatters.push(function(val){
				return '' + val;
			});

		} 
	}
}

