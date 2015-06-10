angular
	.module('mewpipe')
	.factory('videosService', videosService);

videosService.$inject = ['$resource','Config'];

function videosService($resource,Config) {
	return $resource( Config.server.url + ':' + Config.server.port + '/api/videos/:id', { id : '@id'}, {

		/**
		 * GET
		 */

		findOne : { 
			method : 'GET' 
		},

		findAll : {
			method : 'GET',
			params : {
				ordering : '-creation_date'
			}
		},

		findMostShared : {
			method : 'GET', 
			params: {
				limit: 6,
				ordering : '-weekly_share'
			}
		},

		findMostPlayed : { 
			method : 'GET', 
			params: {
				limit: 6,
				ordering: '-weekly_view'
			}
		},

		findByUser : { 
			method : 'GET', 
			params: {
				offset : 0,
				limit  : Config.requests.defaultLimit,
				ordering : '-creation_date'
			}
		},

		search  : { 
			method : 'GET', 
			params: {
				s      : "",
				limit  : Config.requests.defaultLimit, 
				offset : 0 
			} 
		},

		tag : {
			method : 'GET',
			params: {
				limit     : Config.requests.defaultLimit, 
				offset    : 0,
				tag__name : ""
			}
		},

		/**
		 * PUT, PATCH, POST, DELETE
		 */

		update : { 
			method : 'PUT'    
		},

		remove : { 
			method : 'DELETE' 
		},

		/**
		 * OTHER ACTIONS
		 */
		
		share : {
			method : 'POST',
			url    : Config.server.url + ':' + Config.server.port + '/api/videos/:id/share'
		}

	} );
}