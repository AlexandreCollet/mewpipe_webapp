angular.module('mewpipe')
	   .controller('ShareController', ShareController);

ShareController.$inject = ['$scope'];

function ShareController($scope){

	$scope.shareIt = shareIt

	function shareIt(){
		console.log("coucou");
	}

}