angular.module('mewpipe')
       .factory('tokenInterceptor', tokenInterceptor);

tokenInterceptor.$inject = ['Config'];

function tokenInterceptor(Config){
	return {

		'response' : function(response){

			var r = new RegExp('^' + Config.server.url + ':' + Config.server.port);

			if(!r.test(response.config.url)) return response;

			console.log('Back request');

			return response;
		}

	}
}