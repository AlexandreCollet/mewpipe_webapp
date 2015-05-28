angular.module('mewpipe')
       .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope','toastr','Config'];

function RegisterController($scope,toastr,Config){

	$scope.regexEmail    = Config.regex.email;
	$scope.regexPassword = Config.regex.password;

	$scope.username     = "";
	$scope.email        = "";
	$scope.password     = "";
	$scope.confirmation = "";

	$scope.errors = [];

	$scope.onSubmit = onSubmit;

	function onSubmit(isValid){

		$scope.errors = [];

		if(!isValid){

			if(!$scope.username) $scope.errors.push('Username required');

			if(!$scope.regexEmail.test($scope.email))       $scope.errors.push('Invalid email');
			if(!$scope.regexPassword.test($scope.password)) $scope.errors.push('Your password must contain minimum 6 characters, upercase and lowercase letters and at least one number');

			if($scope.password !== $scope.confirmation) $scope.errors.push('Passwords missmatch');
			return;
		}

		toastr.success('Valid','Success');

	}
	
}