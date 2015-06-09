angular.module('mewpipe')
       .run(run);

run.$inject = ['$rootScope','$location','$auth','ngDialog'];

function run($rootScope, $location, $auth, ngDialog){

	$rootScope.$on('$routeChangeStart', function(event, next){

		/**
		 * Close modals
		 */
		
		ngDialog.closeAll();

		/**
		 * Check authentication
		 */

		var acceptAnonymous = next.data.authentication.anonymous;
		var acceptConnected = next.data.authentication.connected;
		var isAuthenticated = $auth.isAuthenticated();

		$rootScope.isAuthenticated   = isAuthenticated;
		$rootScope.authenticatedUser = $auth.getPayload() ? $auth.getPayload().user : null;

		if( !isAuthenticated && !acceptAnonymous ){
			$location.path('/login');
		}
		if( isAuthenticated  && !acceptConnected ){
			$location.path('/');
		}

	});

}