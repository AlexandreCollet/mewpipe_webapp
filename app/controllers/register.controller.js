angular.module('mewpipe')
       .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope','Config'];

function RegisterController($scope){

	$scope.username     = "";
	$scope.email        = "";
	$scope.password     = "";
	$scope.confirmation = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(){
		console.log('Not implemented');
		console.log('username : ' + $scope.username);
		console.log('email : ' + $scope.email)
		console.log('password : ' + $scope.password);
		console.log('confirmation : ' + $scope.confirmation)
	}
	
}