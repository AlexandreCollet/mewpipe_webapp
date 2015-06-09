angular.module('mewpipe')
	   .directive('videoPreview', videoPreview);

videoPreview.$inject = ['$rootScope'];

function videoPreview($rootScope){

	var directive = {
		templateUrl : '/app/directives/videoPreview.directive.html',
		restrict    : 'E',
		link        : link,
		scope       : {	video : '='	}
	};

	return directive;

	function link(scope, element, attrs){

		scope.token = $rootScope.token;

		var hasGetParameters = /\?/.test(scope.video.thumbnail_url);

		scope.getParameter =  scope.token ? ( hasGetParameters ? '&' : '?' ) + 'token=' + scope.token : '' ;

	}

}