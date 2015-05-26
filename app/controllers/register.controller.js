angular.module('mewpipe')
       .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope','toastr','Config'];

function RegisterController($scope,toastr,Config){

	$scope.username     = "";
	$scope.email        = "";
	$scope.password     = "";
	$scope.confirmation = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(){
		toastr.warning('Not implemented yet','Warning');
	}
	
}