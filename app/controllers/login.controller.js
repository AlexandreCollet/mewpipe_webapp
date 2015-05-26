angular.module('mewpipe')
       .controller('LoginController', LoginController);

LoginController.$inject = ['$scope','toastr'];

function LoginController($scope,toastr){

	$scope.username = "";
	$scope.password = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(){
		toastr.warning('Not implemented yet','Warning');
	}
	
}