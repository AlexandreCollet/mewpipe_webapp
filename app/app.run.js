angular.module('mewpipe')
       .run(run);

run.$inject = ['$rootScope','$location','$auth'];

function run($rootScope, $location, $auth){

	$rootScope.$on('$routeChangeStart', function(event, next){

		var acceptAnonymous = next.data.authentication.anonymous;
		var acceptConnected = next.data.authentication.connected;
		var isAuthenticated = $auth.isAuthenticated();

		if(	isAuthenticated  && !acceptConnected ||	!isAuthenticated && !acceptAnonymous ){
			//$location.path('/login');
		}

	});

}