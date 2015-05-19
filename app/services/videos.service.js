angular
	.module('mewpipe')
	.factory('videosService', video);

video.$inject = ['$resource'];

function video($resource) {
	return $resource('http://10.19.16.214:8080/api/videos/:id', {}, {
		findAll : { method : 'GET', isArray:true },
		findOne : { method : 'GET' },
	} );
}