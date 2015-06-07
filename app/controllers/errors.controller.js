angular.module('mewpipe')
       .controller('ErrorsController', ErrorsController);

ErrorsController.$inject = ['$scope','$routeParams','Config'];

function ErrorsController($scope,$routeParams,Config){

	var routeStatusCode = $routeParams.code;

	$scope.statusCode = routeStatusCode ? routeStatusCode : Config.errors.default;

	if(Config.errors.messages.hasOwnProperty(routeStatusCode)){
		$scope.statusText = Config.errors.messages[$scope.statusCode];
	} else {
		$scope.statusText = Config.errors.unknow;
	}

}	