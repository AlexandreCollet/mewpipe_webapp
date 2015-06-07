angular.module('mewpipe')
       .factory('errorsInterceptor', errorsInterceptor);

errorsInterceptor.$inject = ['$location','$q','Config'];

function errorsInterceptor($location,$q,Config){
	return {

		'responseError' : function(rejection){

			switch(rejection.status){

				case 401 : 
					$location.path('/login');
					break;

				default : 
					$location.path('/error/' + rejection.status);
					break; 

			}

			$q.reject(rejection);
		}

	}
}