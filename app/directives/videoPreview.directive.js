angular.module('mewpipe')
	   .directive('videoPreview', videoPreview);

function videoPreview(){

	var directive = {
		templateUrl : '/app/directives/videoPreview.directive.html',
		restrict    : 'E',
		scope       : {	video : '='	}
	};

	return directive;

}