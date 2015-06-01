angular.module('mewpipe')
       .controller('LoginController', LoginController);

LoginController.$inject = ['$scope','toastr'];

function LoginController($scope,toastr){

	$scope.username = "";
	$scope.password = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(isValid){

		if(!isValid){

			if(!$scope.username) toastr.error('Username required','Validation error');
			if(!$scope.password) toastr.error('Password required','Validation error');

			return;
		}

		toastr.success('Valid','Success');
	}
	
}