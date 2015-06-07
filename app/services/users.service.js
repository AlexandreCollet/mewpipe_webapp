angular
	.module('mewpipe')
	.factory('usersService', usersService);

usersService.$inject = ['$resource','Config'];

function usersService($resource,Config) {
	return $resource( Config.server.url + ':' + Config.server.port + '/api/user/', {}, {

		/**
		 * PUT, PATCH, POST, DELETE
		 */

		update : { 
			method : 'PUT'    
		},
		
		/**
		 * OTHER ACTIONS
		 */
		
		changePassword: {
			method : 'POST',
			url    : Config.server.url + ':' + Config.server.port + '/api/user/password'
		}

	} );
}