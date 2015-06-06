angular.module('mewpipe')
       .factory('tokenInterceptor', tokenInterceptor);

tokenInterceptor.$inject = ['satellizer.storage','satellizer.config','Config'];

function tokenInterceptor(satellizerStorage,satellizerConfig,Config){
	return {

		'response' : function(response){

			var r = new RegExp('^' + Config.server.url + ':' + Config.server.port);

			if(!r.test(response.config.url)) return response;

			var tokenKey = satellizerConfig.tokenPrefix ? satellizerConfig.tokenPrefix + '_' + satellizerConfig.tokenName : satellizerConfig.tokenName;
			var newToken = response.headers('authorization');

			if(newToken) satellizerStorage.set(tokenKey,newToken);

			return response;
		}

	}
}