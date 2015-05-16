angular.module('mewpipe')
	   .directive('videoPreview', videoPreview);

function videoPreview(){

	var directive = {
		templateUrl : '/app/directives/videoPreview.directive.html',
		restrict    : 'EA',
		scope       : {
			name : '=name',
			img  : '=img'
		}
	}

	return directive;

}