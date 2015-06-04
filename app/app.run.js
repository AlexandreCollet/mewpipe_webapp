angular.module('mewpipe')
       .run(run);

run.$inject = ['$rootScope','$location','$auth'];

function run($rootScope, $location, $auth){

	$rootScope.$on('$routeChangeStart', function(event, next){
		console.log(next.data.authentication);
	});

}