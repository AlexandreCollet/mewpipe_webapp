angular
	.module('mewpipe')
	.factory('videosService', video);

video.$inject = ['$resource','Config'];

function video($resource,Config) {
	return $resource( Config.server.url + ':' + Config.server.port + '/api/videos/:id', { id : '@id'}, {
		search  : { method : 'GET', params: {
			s      : "",
			limit  : Config.requests.defaultLimit, 
			offset : 0 
		} },
		findOne : { method : 'GET' },
		share : {
			method : 'POST',
			url    : Config.server.url + ':' + Config.server.port + '/api/videos/:id/share'
		}
	} );
}