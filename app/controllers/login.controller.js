angular.module('mewpipe')
       .controller('LoginController', LoginController);

LoginController.$inject = ['$scope'];

function LoginController($scope){

	$scope.username = "";
	$scope.password = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(){
		console.log('Not implemented');
		console.log('username : ' + $scope.username);
		console.log('password : ' + $scope.password);
	}
	
}