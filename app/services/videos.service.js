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
			method : 'GET',
		},

		findAll : {
			method : 'GET',
			params : {
				status   : Config.video.status.READY,
				ordering : '-creation_date'
			}
		},

		findMostShared : {
			method : 'GET', 
			params: {
				limit    : 6,
				status   : Config.video.status.READY,
				ordering : '-weekly_share'
			}
		},

		findMostPlayed : { 
			method : 'GET', 
			params: {
				limit    : 6,
				status   : Config.video.status.READY,
				ordering : '-weekly_view'
			}
		},

		findByUser : { 
			method : 'GET', 
			params: {
				offset           : 0,
				limit            : Config.requests.defaultLimit,
				author__username : '',
 				ordering         : '-creation_date',
			}
		},

		search  : { 
			method : 'GET', 
			params: {
				s      : "",
				status : Config.video.status.READY,
				limit  : Config.requests.defaultLimit, 
				offset : 0 
			} 
		},

		tag : {
			method : 'GET',
			params: {
				limit     : Config.requests.defaultLimit, 
				status    : Config.video.status.READY,
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

		patchPrivacy : {
			method : 'PATCH',
			params : {
				privacy_policy : 0
			}
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