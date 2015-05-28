angular.module('mewpipe')
       .controller('LoginController', LoginController);

LoginController.$inject = ['$scope','toastr'];

function LoginController($scope,toastr){

	$scope.username = "";
	$scope.password = "";

	$scope.errors = [];

	$scope.onSubmit = onSubmit;

	function onSubmit(isValid){

		$scope.errors = [];

		if(!isValid){

			if(!$scope.username) $scope.errors.push('Username required');
			if(!$scope.password) $scope.errors.push('Password required');

			return;
		}

		toastr.success('Valid','Success');
	}
	
}