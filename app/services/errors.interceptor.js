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
				case 404 : 
					$location.path('/error/404');
					break;
				case 500 : 
					$location.path('/error/500');
					break;

			}

			return $q.reject(rejection);
		}

	}
}