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
		scope.url   = "";

		scope.$watch('video', function(){

			if(!scope.video) return;

			scope.$watch('video.thumbnail_url', function(){
				var hasGetParameters = /\?/.test(scope.video.thumbnail_url);

				scope.url = scope.video.thumbnail_url + ( scope.token ? ( hasGetParameters ? '&' : '?' ) + 'token=' + scope.token : '' ) ;
			});

		});


	}

}